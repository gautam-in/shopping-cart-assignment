import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { home } from "./home.reducer";
import { alert } from './alert.reducer';
import { cart } from './cart.reducer';
import { products } from "./products.reducer";

const rootReducer = combineReducers({
  authentication,
  registration,
  alert,
  home,
  cart,
  products
});

export default rootReducer;