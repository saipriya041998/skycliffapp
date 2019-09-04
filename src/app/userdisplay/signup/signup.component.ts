import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _data:UserdataService ) { }

  ngOnInit() {
  }
  onUserSave(f){
    this._data.addUser(f.value).subscribe(
      (data:any)=>{
        alert('record inserted');
      }
    );
  }

}
