import { combineReducers } from 'redux';

import banners from './bannersReducer';
import cart from './cartReducer';
import categories from './categoriesReducer';
import products from './productsReducer';

export default combineReducers({
  banners,
  cart,
  categories,
  products
});
