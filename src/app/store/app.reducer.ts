import { ActionReducerMap } from '@ngrx/store';
import * as fromCart from '../features/cart/store/reducer/cart.reducer';
import * as fromAuth from '../auth/store/reducers/auth.reducer';

export interface AppState {
  cartList: fromCart.State;
  auth: fromAuth.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  cartList: fromCart.cartReducer,
  auth: fromAuth.authReducer,
};
