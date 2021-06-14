import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
  catchError,
  filter,
  map,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';
import { AppState } from 'src/app/models/app-state.model';
import { Product } from '../../models/product.model';
import { ProductService } from '../../service/product.service';
import { ProductActions } from '../actions/product.action.types';
import { selectProductState } from '../selectors/products.selectors';

const handleSucess = (banners: Product[]) => {
  return ProductActions.setProducts({ payload: banners });
};

const handleError = (errorRes: HttpErrorResponse) => {
  let errorMessage = 'An unknown error occurred!';
  if (!errorRes.error || !errorRes.error.error) {
    return of(ProductActions.fetchProductsError({ payload: errorMessage }));
  }
  errorMessage = errorRes.message;
  return of(ProductActions.fetchProductsError({ payload: errorMessage }));
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
      ofType(ProductActions.fetchProducts),
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
      ofType(ProductActions.setProducts),
      withLatestFrom(this.store.pipe(select(selectProductState))),
      map(([, prodState]) => {
        if (prodState.filterBy) {
          return ProductActions.filterBy({ payload: prodState.filterBy });
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
      map(({ filterBy }) => ProductActions.filterBy(filterBy))
    )
  );
}
