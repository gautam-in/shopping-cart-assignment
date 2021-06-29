import { RouterState } from '@angular/router';
import { AuthState } from '../core/models/auth-state.model';
import { BannerState } from '../modules/home/models/banner-state.model';
import { CategoryState } from '../modules/home/models/category-state.model';
import { ProductState } from '../modules/product/models/product-state.model';
import { CartState } from '../shared/models/cart-state.model';

export interface AppState {
  auth: AuthState;
  banner: BannerState;
  categories: CategoryState;
  products: ProductState;
  cart: CartState;
  router: RouterState;
}
