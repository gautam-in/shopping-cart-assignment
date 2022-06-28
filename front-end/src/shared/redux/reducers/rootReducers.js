import { combineReducers } from 'redux';

import { homeReducer } from '../reducers/home';
import { productsReducer } from '../reducers/productsListing';
import { userReducer } from '../reducers/user';
import { cartReducer } from '../reducers/cart';


export const rootReducer = combineReducers({
  home: homeReducer,
  productsData:productsReducer,
  user:userReducer,
  cartData:cartReducer
});