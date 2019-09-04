import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProductResolved } from './productdisplay/product';
import { ProductdataService } from './productdisplay/productdata.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<ProductResolved> {
  constructor(private _productdate:ProductdataService) { }
  resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<any>{
    return this._productdate.getAllProducts().pipe(
      map(x=>({products:x,errormessage:''})),
      catchError(error=>{
        return of({products:null,errormessage:'something went wrong'})
      })
    );
  }
}
