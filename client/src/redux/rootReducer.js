import { combineReducers } from 'redux';

import cartReducer from './Cart/reducer';
import homeReducer from './Home/reducer';
import productsReducer from './Products/reducer';

const rootReducer = combineReducers({
  home: homeReducer,
  products: productsReducer,
  cart: cartReducer
});

export default rootReducer;