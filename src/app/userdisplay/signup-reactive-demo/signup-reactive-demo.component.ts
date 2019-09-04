import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  AbstractControl
} from "@angular/forms";
import { UserdataService } from "../userdata.service";
import { User } from "../user";
import { CheckEmail } from '../checkemail';

@Component({
  selector: "app-signup-reactive-demo",
  templateUrl: "./signup-reactive-demo.component.html",
  styleUrls: ["./signup-reactive-demo.component.css"]
})
export class SignupReactiveDemoComponent implements OnInit {
  signup: FormGroup;
  debouncer: any;
  constructor(private fb: FormBuilder, private _data: UserdataService) {}

  ngOnInit() {
    this.signup = this.fb.group({
      user_email: new FormControl(null, [
        Validators.required,
        Validators.email
      ],CheckEmail.emailValidator(this._data)),
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
  // validateEmail(control:AbstractControl):any{
  //   clearTimeout(this.debouncer);
  //   return new Promise(resolve => {
  //     this.debouncer = setTimeout(() => {
  //       this._data.getUserByEmail(control.value).subscribe(
  //         (res:User[]) => {
  //         if(res.length==1){
  //           resolve({'emailInUse': true});
  //         }
  //         resolve(null);
  //       });

  //     }, 3000);

  //   });

  // }
  matchPassword(x: AbstractControl): { [y: string]: boolean } {
    let password = x.get("user_password").value;
    let cnfmpassword = x.get("user_confirm_password").value;
    if (password != cnfmpassword) {
      return { passwordNotMatched: true };
    }
    return null;
  }
  onUserSave() {
    this._data
      .addUser(
        new User(
          this.signup.value.user_email,
          this.signup.value.user_name,
          this.signup.value.user_password_group.user_password,
          this.signup.value.user_mobile_no
        )
      )
      .subscribe((x: any) => {
        alert("record added");
      });
  }
}
