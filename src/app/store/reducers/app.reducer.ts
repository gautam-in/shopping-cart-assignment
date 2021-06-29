import { routerReducer } from '@ngrx/router-store';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { authReducer } from 'src/app/core/store/reducers/auth.reducer';
import { AppState } from 'src/app/models/app-state.model';
import { bannerReducer } from 'src/app/modules/home/store/reducers/banner.reducer';
import { categoryReducer } from 'src/app/modules/home/store/reducers/category.reducer';
import { productReducer } from 'src/app/modules/product/store/reducers/product.reducer';
import { cartReducer } from 'src/app/shared/store/reducers/cart-list.reducer';
import { environment } from 'src/environments/environment';

export const appReducer: ActionReducerMap<AppState> = {
  banner: bannerReducer,
  auth: authReducer,
  categories: categoryReducer,
  products: productReducer,
  cart: cartReducer,
  router: routerReducer,
};

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log('state before: ', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger]
  : [];
