import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, catchError, map, filter } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {
  FetchProductsError,
  FETCH_PRODUCTS,
  FilterBy,
  Product,
  SetProducts,
} from './product.actions';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';
import { UtilService } from 'src/app/services/util.service';

const handleSucess = (banners: Product[]) => {
  return new SetProducts(banners);
};

const handleError = (errorRes: HttpErrorResponse) => {
  let errorMessage = 'An unknown error occurred!';
  if (!errorRes.error || !errorRes.error.error) {
    return of(new FetchProductsError(errorMessage));
  }
  errorMessage = errorRes.message;
  return of(new FetchProductsError(errorMessage));
};

@Injectable()
export class ProductEffects {
  fetchProducts = createEffect(() =>
    this.actions$.pipe(
      ofType(FETCH_PRODUCTS),
      switchMap(() => {
        return this.http.get<Product[]>(environment.server + '/products').pipe(
          map((resData) => {
            return handleSucess(resData);
          }),
          catchError((errorRes) => {
            return handleError(errorRes);
          })
        );
      })
    )
  );

  loadProductsByCategoryActions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      map((r: any) => {
        return {
          url: r.payload.routerState.url,
          filterBy: r.payload.routerState.queryParams['categoryId'],
        };
      }),
      filter(({ url, filterBy }) => url.startsWith('/products')),
      map(({ filterBy }) => new FilterBy(filterBy))
    )
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private util: UtilService
  ) {}
}
