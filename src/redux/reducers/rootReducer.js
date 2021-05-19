import { combineReducers } from 'redux';
import { cart } from "./cartReducer";
import { products } from "./productsReducer";

const rootReducer = combineReducers({
  products,
  cart
});

export default rootReducer;