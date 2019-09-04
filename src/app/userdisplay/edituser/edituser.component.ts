import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { UserdataService } from '../userdata.service';

import { User } from '../user';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  email:string='';

  name:string='';

  pass:string='';

  mob_no:string='';

  constructor(private _act:ActivatedRoute,private _data:UserdataService) { }

  ngOnInit() {
    this.email= this._act.snapshot.params["user_email"];

   this._data.getUserByEmail(this.email).subscribe(

    (data:User[])=>{

      this.name=data[0].user_name;

      this.pass=data[0].user_password;

      this.mob_no=data[0].user_mobile_no;

    }

   );
  }
  onUserUpdate(f){



    this._data.editUser(f.value).subscribe(

      (data:any)=>{

        alert('updated');

      }

    );

  }

}
