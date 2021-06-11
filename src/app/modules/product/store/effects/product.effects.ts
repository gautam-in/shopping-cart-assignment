import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
  catchError,
  filter,
  map,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';
import { UtilService } from 'src/app/core/services/util.service';
import { AppState } from 'src/app/models/app-state.model';
import { environment } from 'src/environments/environment';
import { Product } from '../../models/product.model';
import { ProductService } from '../../service/product.service';
import {
  FetchProductsError,
  FETCH_PRODUCTS,
  FilterBy,
  SetProducts,
  SET_PRODUCTS,
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
    private productService: ProductService,
    private store: Store<AppState>
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

  setProducts = createEffect(() =>
    this.actions$.pipe(
      ofType(SET_PRODUCTS),
      withLatestFrom(this.store.select('products')),
      map(([, prodState]) => {
        if (prodState.filterBy) {
          return new FilterBy(prodState.filterBy);
        }
        return {
          type: 'Dummy',
        };
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
