import { Action, ActionReducerMap } from '@ngrx/store';

import * as fromAuth from '../auth/store/auth.reducer';
import * as fromBanner from '../home/store/banner.reducer';
import * as fromCategories from '../home/store/category.reducer';
import * as fromProducts from '../product/store/product.reducer';
import * as fromCart from '../cart/store/cart-list.reducer';
export interface AppState {
  auth: fromAuth.State;
  banner: fromBanner.State;
  categories: fromCategories.State;
  products: fromProducts.State;
  cart: fromCart.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  banner: fromBanner.bannerReducer,
  categories: fromCategories.categoryReducer,
  products: fromProducts.productReducer,
  cart: fromCart.cartReducer,
};
