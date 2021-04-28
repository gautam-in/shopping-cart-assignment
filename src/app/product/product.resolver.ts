import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { AppService } from '../shared/services/app.service';
import { ProductService } from './product.service';
import { catchError, map } from 'rxjs/operators';
import { Observable, forkJoin, of } from 'rxjs';
import { IProduct } from 'src/models/product.model';

@Injectable()
export class ProductsResolver implements Resolve<Observable<any>> {
  constructor(
    private productService: ProductService,
    private _appService: AppService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IProduct[]> {
    this.getProducts();
    return this.getProducts();
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
