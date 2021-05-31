import { Action, ActionReducerMap } from '@ngrx/store';

import * as fromAuth from '../auth/store/auth.reducer';
import * as fromBanner from '../home/store/banner.reducer';
import * as fromCategories from '../home/store/category.reducer';
import * as fromProducts from '../product/store/product.reducer';
export interface AppState {
  auth: fromAuth.State;
  banner: fromBanner.State;
  categories: fromCategories.State;
  products: fromProducts.State;
}

export const appReducer: ActionReducerMap<AppState, any> = {
  auth: fromAuth.authReducer,
  banner: fromBanner.bannerReducer,
  categories: fromCategories.categoryReducer,
  products: fromProducts.productReducer,
};
