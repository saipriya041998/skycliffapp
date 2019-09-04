import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, Validators, AbstractControl, FormGroup, FormArray } from "@angular/forms";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer:FormGroup;
  invalidName:string[]=['xyz','abc'];
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.customer=this.fb.group({
      firstname:new FormControl(null,[Validators.required,Validators.pattern('a-zA-z'),Validators.minLength(3),this.checkFirstName.bind(this)]),
      lastname:new FormControl(null,[Validators.required,Validators.pattern('a-zA-z'),Validators.minLength(3),this.checkFirstName.bind(this)]),
      passwordgroup:new FormGroup({
        password:new FormControl(null,Validators.required),
        confirm_password:new FormControl(null,Validators.required)
      },this.matchpassword.bind(this)),
      email:new FormControl(),
      mobile_no:new FormControl(),
      notification:new FormControl('email'),
      hobby:new FormArray([])
    });
    this.customer.get('notification').valueChanges.subscribe(
      (x)=>{
        let email=this.customer.get('email');
        let mobile_no=this.customer.get('mobile_no');
        if(x=="email"){
          email.setValidators(Validators.required);
          mobile_no.clearValidators();
        }
        else{
          mobile_no.setValidators(Validators.required);
          email.clearValidators();
        }
        email.updateValueAndValidity();
        mobile_no.updateValueAndValidity();
      }
    );
  }
  checkFirstName(x:AbstractControl):{[y:string]:boolean}{
    let value=x.value;
    if(this.invalidName.indexOf(value)!==-1){
      return{'invalidName':true};
    }
    return null;

  }
  matchpassword(x:AbstractControl):{[y:string]:boolean}
  {
    let pass=x.get('password').value;
    let cnff=x.get('confirm_password').value;
    if(pass!=cnff){
      return {'passwordNotMatched':true};
    }
    return null;
  }
  onSubmit(){
    console.log(this.customer);
  }
  onAddClicked(){
let control=new FormControl(null,Validators.required);
(<FormArray> this.customer.get('hobby')).push(control);
  }
onDelClicked(i){
(<FormArray> this.customer.get('hobby')).removeAt(i);
}
getCotrols(){
  return (<FormArray>this.customer.get('hobby')).controls;
}
}
