import { Component, OnInit } from '@angular/core';
import { User } from '../userdisplay/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
arr:User[]=[];
userData:any;
errormessage:string='';
  constructor(private _actroute:ActivatedRoute) {
    this.userData=this._actroute.snapshot.data["udata"];
  }

  ngOnInit() {
    this.arr=this.userData.data;
    this.errormessage=this.userData.errormessage;
  }

}
