import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class TaskdataService {
  url:string='https://nodejsapidemo.herokuapp.com/tasks/';


  constructor(private _http:HttpClient,private _router:Router) { }
  getAllTasks(){
    return this._http.get(this.url);
  }
  getTaskById(Id){
    return this._http.get(this.url+Id);
  }
  addTask(item){
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head});
  }
  deleteTask(Id){
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+Id,{headers:head});

  }
  editTask(Id,item){
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+Id,body,{headers:head});
  }
  currentUser;
  redirecURL:string;

  login(user_email:string,user_password:string){
    if(user_email=="admin"&&user_password=="1234"){
      this.currentUser={
        user_email:user_email,
        password:user_password,
        isAdmin:true
      };
      console.log(this.currentUser);

      return null;
    }
    this.currentUser={
      user_email:user_email,
      password:user_password,
      isAdmin:false
    };
  }
  logout(){
    this.currentUser=null;
    this.redirecURL='';
    this._router.navigate(['']);
  }
  get isLoggedIn():boolean{
    return !!this.currentUser;
  }

}
