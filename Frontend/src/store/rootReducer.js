import {combineReducers} from 'redux';
import {products, categories} from '../reducer';

const rootReducer = combineReducers({
  products,
  categories,
});

export default rootReducer;
