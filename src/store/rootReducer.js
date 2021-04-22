import { combineReducers } from 'redux';

import { products, categories, cart } from '../reducer';

const rootReducer = combineReducers({
  products,
  categories,
  cart
});

export default rootReducer;
