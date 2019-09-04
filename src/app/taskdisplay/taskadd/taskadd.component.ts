import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskdataService } from '../taskdata.service';



@Component({
  selector: 'app-taskadd',
  templateUrl: './taskadd.component.html',
  styleUrls: ['./taskadd.component.css']
})
export class TaskaddComponent implements OnInit {
  arr:Task[]=[];

  constructor(private _data:TaskdataService) { }

  ngOnInit() {
  }
  onSaveTask(f){
    this._data.addTask(f.value).subscribe(
      (data:any)=>{
        console.log(data);
        alert('added task successfully');

      }
    );
  }

}
