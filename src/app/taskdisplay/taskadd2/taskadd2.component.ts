import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { TaskdataService } from 'src/app/taskdisplay/taskdata.service';
import { Task } from 'src/app/taskdisplay/task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taskadd2',
  templateUrl: './taskadd2.component.html',
  styleUrls: ['./taskadd2.component.css']
})
export class Taskadd2Component implements OnInit {
task:FormGroup;
  constructor(private fb:FormBuilder,private _data:TaskdataService,private _router:Router) { }
  ngOnInit() {
    this.task=this.fb.group({
      id:new FormControl(null),
      title:new FormControl(null),
      status:new FormControl(null)
    });
  }
  onTaskSave(){
    this._data
    .addTask(
      new Task(
        this.task.value.id,
        this.task.value.title,
        this.task.value.status
      )
    ).subscribe((x:any)=>{
      alert('record added');
      this._router.navigate(["/tasks"]);

    });

  }

}
