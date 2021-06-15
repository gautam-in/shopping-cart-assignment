import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
  catchError,
  map,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { ErrorMsg } from 'src/app/core/common/constants/error.constants';
import { UtilService } from 'src/app/core/services/util.service';
import { selectAuthState } from 'src/app/core/store/selectors/auth.selectors';
import { AppState } from 'src/app/models/app-state.model';
import { ProductService } from 'src/app/modules/product/service/product.service';
import { CartResponse } from '../../models/cart-response.model';
import { CartState } from '../../models/cart-state.model';
import { CartActions } from '../actions/cartlist.actions.types';
import { selectCartState } from '../selectors/cart.selectors';

const handleSucess = (response: CartResponse) => {
  return CartActions.addCartSuccess({ payload: response.responseMessage });
};

const handleError = (errorRes: any) => {
  let errorMessage = 'An unknown error occurred!';
  if (!errorRes.error || !errorRes.error.error) {
    return of(CartActions.addCartError({ payload: errorMessage }));
  }
  errorMessage = errorRes.error.error;
  return of(CartActions.addCartError({ payload: errorMessage }));
};

@Injectable()
export class CartEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<AppState>,
    private util: UtilService,
    private productService: ProductService
  ) {}
  addProductAction = createEffect(() =>
    this.actions$.pipe(
      ofType(
        CartActions.addProduct,
        CartActions.addProducts,
        CartActions.deleteProduct,
        CartActions.updateProduct
      ),
      switchMap((_) => this.productService.addToCart()),
      map((resData) => {
        return handleSucess(resData);
      }),
      catchError((errorRes) => {
        return handleError(errorRes);
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
        ofType(CartActions.fetchLocalCart),
        map(() => {
          const cartState: CartState = JSON.parse(
            localStorage.getItem('cartModel') || '0'
          );
          if (!cartState) {
            return { type: 'DUMMY' };
          }
          return CartActions.addProducts({ payload: cartState.products });
        })
      ),
    { dispatch: true }
  );

  saveLocalCartAction = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          CartActions.addProduct,
          CartActions.addProducts,
          CartActions.updateProduct,
          CartActions.deleteProduct
        ),
        withLatestFrom(this.store.pipe(select(selectCartState))),
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
          CartActions.addProduct,
          CartActions.addProducts,
          CartActions.updateProduct,
          CartActions.deleteProduct,
          CartActions.increaseProductQuantity,
          CartActions.decreaseProductQuantity
        ),
        map(() => {
          return CartActions.computeCart({});
        })
      ),
    { dispatch: true }
  );

  cartSuccessAction$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          CartActions.addCartSuccess,
          CartActions.addCartError,
          CartActions.placeOrderFail
        ),
        tap((e: any) => {
          this.util.openSnackBar(e.payload);
        })
      ),
    { dispatch: false }
  );

  cartOrderPlacedAction$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CartActions.placeOrder),
        withLatestFrom(this.store.pipe(select(selectAuthState))),
        map(([, userState]) => {
          if (userState.user) {
            return CartActions.placeOrderSuccess({});
          }
          return CartActions.placeOrderFail({
            payload: ErrorMsg.INVALID_USER,
          });
        })
      ),
    { dispatch: true }
  );

  postPlaceOrderSuccessAction$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CartActions.placeOrderSuccess),
        tap((e: any) => {
          this.util.openSnackBar(ErrorMsg.ORDER_PLACED);
          localStorage.removeItem('cartModel');
        })
      ),
    {
      dispatch: false,
    }
  );
}
