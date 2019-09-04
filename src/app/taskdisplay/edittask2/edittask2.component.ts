import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskdataService } from '../taskdata.service';
import { Task } from '../task';

@Component({
  selector: 'app-edittask2',
  templateUrl: './edittask2.component.html',
  styleUrls: ['./edittask2.component.css']
})
export class Edittask2Component implements OnInit {
task1:FormGroup;
id:string;
displayTask:Task;
  constructor(private fb: FormBuilder,private _taskdata:TaskdataService,private _actroute:ActivatedRoute,private _router:Router) { }
  ngOnInit() {
    this.id=this._actroute.snapshot.params['id'];
    this._taskdata.getTaskById(this.id).subscribe(
      (data:any)=>{
        this.displayTask=data[0];
        console.log(this.displayTask);
        this.task1.patchValue({
          id:this.displayTask.Id,
          title:this.displayTask.Title,
          status:this.displayTask.Status
        });
      }
    );
    this.task1 = this.fb.group({
      id: new FormControl(),
      title: new FormControl(),
      status: new FormControl()
    });
  }
  onTaskEdit(){
    this._taskdata.editTask(this.id,
      new Task(
        this.task1.value.id,
        this.task1.value.title,
        this.task1.value.status
      )).subscribe(
        (data: any)=>{
          alert('Updated Task');
          this._router.navigate(['/tasks']);
        }
      );
  }

}
