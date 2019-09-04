import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { TaskdataService } from './taskdata.service';
import { Router, Route } from "@angular/router";
@Component({
  selector: 'app-taskdisplay',
  templateUrl: './taskdisplay.component.html',
  styleUrls: ['./taskdisplay.component.css']
})
export class TaskdisplayComponent implements OnInit {
  arr:Task[]=[];

  constructor(private _data:TaskdataService,private _router:Router) { }

  ngOnInit() {
    this._data.getAllTasks().subscribe(
      (data:Task[])=>{
        this.arr=data;
      }
    );
  }
  onsideBarClick(value){
    if(value!=""){
      this.arr=this.arr.filter(x=>x.Id.indexOf(value)!=-1);
    }
    else {

      this._data.getAllTasks().subscribe(

        (data: Task[]) => {

          this.arr = data;

        },

        function(error) {

          alert(error);

        },

        function() {}

      );

    }
  }
  onTaskDelete(item:Task){
    this._data.deleteTask(item.Id).subscribe(
      (data:any)=>{
        this.arr.splice(this.arr.indexOf(item),1);
        alert('deleted successfully');

      }
    );

  }
  onTaskEdit(item:Task){
    this._router.navigate(['/edittask',item.Id]);

  }
  onTaskEditReactive(item:Task){
    this._router.navigate(['/edittask2',item.Id]);
  }

}
