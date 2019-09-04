import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { TaskdataService } from './taskdisplay/taskdata.service';

@Injectable({
  providedIn: 'root'
})
export class TaskGuardService implements CanActivate {

  constructor(private _taskdata:TaskdataService,private _router:Router) { }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    return this.isUserLoggedIn(state.url);
  }
  isUserLoggedIn(url:string):boolean{
    if(this._taskdata.isLoggedIn){
      return true;
    }
    this._taskdata.redirecURL=url;
    this._router.navigate(['/login']);
    return false;

  }
}
