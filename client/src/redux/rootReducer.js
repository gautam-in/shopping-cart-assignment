import { combineReducers } from 'redux';

import cartReducer from './Cart/reducer';
import homeReducer from './Home/reducer';
import userReducer from './User/reducer';
import productsReducer from './Products/reducer';

const rootReducer = combineReducers({
  home: homeReducer,
  cart: cartReducer,
  user: userReducer,
  products: productsReducer
});

export default rootReducer;