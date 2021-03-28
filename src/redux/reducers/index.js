import { combineReducers } from 'redux';
import { miniCart } from './miniCart';
import { products } from './products';
import { loader } from './loader';

export default combineReducers({ miniCart, products, loader });
