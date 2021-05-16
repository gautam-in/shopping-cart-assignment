import { combineReducers } from 'redux';

import { cart } from "./cartReducer";
import { categoriesLis } from "./categoriesReducer";
import { products } from "./productsReducer";

const rootReducer = combineReducers({
  categoriesLis,
  products,
  cart

});

export default rootReducer;