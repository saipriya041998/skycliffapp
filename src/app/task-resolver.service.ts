import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TaskResolved } from './taskdisplay/task';
import { TaskdataService } from './taskdisplay/taskdata.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskResolverService implements Resolve<TaskResolved> {

  constructor(private _taskdata:TaskdataService) { }
  resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<any>{
    return this._taskdata.getAllTasks().pipe(
      map(x=>({data:x,errormessage:''})),
      catchError(err=>{
        return of({data:null,errormessage:'something  went wrong'})
      }
      )
    );
  }
}
