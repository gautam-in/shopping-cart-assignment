import {combineReducers} from 'redux';
import user from '../reducer/user';
import products from '../reducer/products';

const rootReducer = combineReducers({
  user,
  products,
});

export default rootReducer;
