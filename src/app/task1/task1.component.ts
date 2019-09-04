import { Component, OnInit } from '@angular/core';
import { Task } from '../taskdisplay/task';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {
arr:Task[]=[];
taskData:any;
errormessage:string;

  constructor(private _actroute:ActivatedRoute) {
    this.taskData=this._actroute.snapshot.data["tdata"];
   }

  ngOnInit() {
    this.arr=this.taskData.data;
    this.errormessage=this.taskData.errormessage;
  }

}
