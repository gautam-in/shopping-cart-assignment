import { combineReducers } from 'redux';

import {cart} from "./cartReducer";
import { categoriesLis } from "./categoriesReducer";
import { products } from "./productsReducer";
import {banners} from './bannerReducer';

const rootReducer = combineReducers({
  categoriesLis,
  products,
  banners,
  cart

});

export default rootReducer;