import { combineReducers } from 'redux';


import { categoriesLis } from "./categoriesReducer";
import { products } from "./productsReducer";
import {banners} from './bannerReducer';

const rootReducer = combineReducers({
  categoriesLis,
  products,
  banners
});

export default rootReducer;