import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { UserdataService } from '../userdata.service';
import { CheckEmail } from '../checkemail';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edituserreactive',
  templateUrl: './edituserreactive.component.html',
  styleUrls: ['./edituserreactive.component.css']
})
export class EdituserreactiveComponent implements OnInit {
  signup: FormGroup;
  debouncer: any;
  displayUser:User;
  email:string;
  constructor(private fb: FormBuilder, private _userdata: UserdataService,private _actroute:ActivatedRoute,private _router:Router) {}

  ngOnInit() {
    this.email=this._actroute.snapshot.params['user_email'];
    this._userdata.getUserByEmail(this.email).subscribe(
      (data:any)=>{
        this.displayUser=data[0];
        console.log(this.displayUser);
        this.signup.patchValue({
          user_email:this.displayUser.user_email,
          user_name:this.displayUser.user_name,
          user_mobile_no:this.displayUser.user_mobile_no,
          user_password_group:{
            user_password:this.displayUser.user_password,
            user_confirm_password:this.displayUser.user_password
          }
        })
      }
    );
    this.signup = this.fb.group({
      user_email: new FormControl(null, [
        Validators.required,
        Validators.email
      ],CheckEmail.emailValidator(this._userdata)),
      user_name: new FormControl(null, Validators.required),
      user_password_group: new FormGroup(
        {
          user_password: new FormControl(null, Validators.required),
          user_confirm_password: new FormControl(null, Validators.required)
        },
        this.matchPassword.bind(this)
      ),
      user_mobile_no: new FormControl()
    });
  }
  matchPassword(x: AbstractControl): { [y: string]: boolean } {
    let password = x.get("user_password").value;
    let cnfmpassword = x.get("user_confirm_password").value;
    if (password != cnfmpassword) {
      return { passwordNotMatched: true };
    }
    return null;
  }
  onUserEdit(){
    this._userdata.editUser(
      new User(
      this.signup.value.user_email,
      this.signup.value.user_name,
      this.signup.value.user_password_group.user_password,
      this.signup.value.user_mobile_no
    )).subscribe(
      (data:any)=>{
        alert('updated successfully');
        this._router.navigate(['/users']);
      }
    );

  }
}
