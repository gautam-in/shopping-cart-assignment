import {combineReducers} from 'redux';
import {products, categories, cart, user} from '../reducer';

const rootReducer = combineReducers({
  products,
  categories,
  cart,
  user,
});

export default rootReducer;
