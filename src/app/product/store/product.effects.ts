import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {
  FetchProductsError,
  FETCH_PRODUCTS,
  Product,
  SetProducts,
} from './product.actions';

const handleSucess = (banners: Product[]) => {
  return new SetProducts(banners);
};

const handleError = (errorRes: any) => {
  let errorMessage = 'An unknown error occurred!';
  if (!errorRes.error || !errorRes.error.error) {
    return of(new FetchProductsError(errorMessage));
  }
  switch (errorRes.error.error.message) {
    case 'EMAIL_EXISTS':
      errorMessage = 'This email exists already';
      break;
    case 'EMAIL_NOT_FOUND':
      errorMessage = 'This email does not exist.';
      break;
    case 'INVALID_PASSWORD':
      errorMessage = 'This password is not correct.';
      break;
  }
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

  constructor(private actions$: Actions, private http: HttpClient) {}
}
