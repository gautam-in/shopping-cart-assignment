import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import {
  switchMap,
  catchError,
  map,
  withLatestFrom,
  tap,
} from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  AddCartError,
  AddCartSuccess,
  AddProducts,
  ADD_CART_ERROR,
  ADD_CART_SUCCESS,
  ADD_PRODUCT,
  ADD_PRODUCTS,
  ComputeCart,
  DECREASE_PRODUCT_QUANTITY,
  DELETE_PRODUCT,
  FETCH_LOCAL_CART,
  INCREASE_PRODUCT_QUANTITY,
  PLACE_ORDER,
  UPDATE_PRODUCT,
} from '../actions/cart-list.actions';
import { Store } from '@ngrx/store';
import { UtilService } from 'src/app/core/services/util.service';
import { environment } from 'src/environments/environment';
import { AppState } from 'src/app/models/app-state.model';
import { CartResponse } from '../../models/cart-response.model';
import { CartState } from '../../models/cart-state.model';
import { ErrorMsg } from 'src/app/core/common/constants/error.constants';

const handleSucess = (response: CartResponse) => {
  return new AddCartSuccess(response.responseMessage);
};

const handleError = (errorRes: any) => {
  let errorMessage = 'An unknown error occurred!';
  if (!errorRes.error || !errorRes.error.error) {
    return of(new AddCartError(errorMessage));
  }
  return of(new AddCartError(errorMessage));
};

@Injectable()
export class CartEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<AppState>,
    private util: UtilService
  ) {}
  addProductAction = createEffect(() =>
    this.actions$.pipe(
      ofType(ADD_PRODUCT, ADD_PRODUCTS, DELETE_PRODUCT, UPDATE_PRODUCT),
      switchMap(() => {
        return this.http
          .post<CartResponse>(environment.server + '/addToCart', null)
          .pipe(
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

  //put logic here to check inventory before cart modification
  // checkInventoryAction$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(ADD_PRODUCT, ADD_PRODUCTS, UPDATE_PRODUCT),

  //   )
  // );

  fetchLocalCartAction = createEffect(
    () =>
      this.actions$.pipe(
        ofType(FETCH_LOCAL_CART),
        map(() => {
          const cartState: CartState = JSON.parse(
            localStorage.getItem('cartModel') || '0'
          );
          if (!cartState) {
            return { type: 'DUMMY' };
          }
          return new AddProducts(cartState.products);
        })
      ),
    { dispatch: true }
  );

  saveLocalCartAction = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ADD_PRODUCT, ADD_PRODUCTS, UPDATE_PRODUCT, DELETE_PRODUCT),
        withLatestFrom(this.store.select('cart')),
        switchMap(([actionData, cartState]) => {
          localStorage.setItem('cartModel', JSON.stringify(cartState));
          return cartState.products;
        })
      ),
    { dispatch: false }
  );

  updateCartAction$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          ADD_PRODUCT,
          ADD_PRODUCTS,
          UPDATE_PRODUCT,
          DELETE_PRODUCT,
          INCREASE_PRODUCT_QUANTITY,
          DECREASE_PRODUCT_QUANTITY
        ),
        map(() => {
          return new ComputeCart();
        })
      ),
    { dispatch: true }
  );

  cartSuccessAction$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ADD_CART_SUCCESS, ADD_CART_ERROR),
        tap((e: any) => {
          this.util.openSnackBar(e.payload);
        })
      ),
    { dispatch: false }
  );

  cartOrderPlacedAction$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PLACE_ORDER),
        tap((e: any) => {
          this.util.openSnackBar(ErrorMsg.ORDER_PLACED);
          localStorage.removeItem('cartModel');
        })
      ),
    { dispatch: false }
  );
}
