import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { AppService } from '../app.service';
import { catchError, map } from 'rxjs/operators';
import { forkJoin, Observable, of } from 'rxjs';

@Injectable()
export class ProductsResolver implements Resolve<Observable<any>> {
  constructor(
    private _appService: AppService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    
    return forkJoin(this.getProducts(), this.getCategory());
  }

  getProducts(): any {
    return this._appService.getProducts().pipe(
      map((response) => {
        if (response) {
          return response || [];
        }
        return null;
      }),
      catchError((error) => {
        return of(null);
      })
    );
  }

  getCategory(): any {
    return this._appService.getCatagories().pipe(
      map((response) => {
        if (response) {
          return response || [];
        }
        return null;
      }),
      catchError((error) => {
        return of(null);
      })
    );
  }
}
