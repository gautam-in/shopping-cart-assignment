import { combineReducers } from 'redux';
import miniCart from './miniCart';
import products from './product';
import categories from './category';
import banners from './banner';
import loader from './loader';

export default combineReducers({
  miniCart, products, categories, banners, loader,
});
