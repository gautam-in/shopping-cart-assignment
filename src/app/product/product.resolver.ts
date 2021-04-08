import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { AppService } from '../services/app.service';
import { ProductService } from './product.service';
import { catchError, map } from 'rxjs/operators';
import { Observable, forkJoin, of } from 'rxjs';

@Injectable()
export class ProductsResolver implements Resolve<Observable<any>> {
  constructor(
    private productService: ProductService,
    private _appService: AppService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    this.getProducts();
    return this.getProducts()
    // let response1 = this.getProducts();
    // let response2 = this.getCategory();
    // return forkJoin([response1, response2]);
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
    this._appService.getCatagories().pipe(
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
