import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {
id:string;
  constructor(private _actroute:ActivatedRoute,private _router:Router) { }

  ngOnInit() {
    this._actroute.params.subscribe(
      (x)=>{
        this.id=x.id;
      }
    );
  }
  onClick1(){
    this._router.navigate(['demo1',1]);
  }
  onClick2(){
    this._router.navigate(['demo1',2]);
  }

  onClick3(){
    this._router.navigate(['demo1',3]);
  }


}
