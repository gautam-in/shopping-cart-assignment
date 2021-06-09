import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { UtilService } from 'src/app/core/services/util.service';
import { environment } from 'src/environments/environment';
import { Product } from '../../models/product.model';
import { ProductService } from '../../service/product.service';
import {
  FetchProductsError,
  FETCH_PRODUCTS,
  FilterBy,
  SetProducts,
} from '../actions/product.actions';

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
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private util: UtilService,
    private productService: ProductService
  ) {}
  fetchProducts = createEffect(() =>
    this.actions$.pipe(
      ofType(FETCH_PRODUCTS),
      switchMap((_) => this.productService.fetchProducts()),
      map((resData) => {
        return handleSucess(resData);
      }),
      catchError((errorRes) => {
        return handleError(errorRes);
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
}
