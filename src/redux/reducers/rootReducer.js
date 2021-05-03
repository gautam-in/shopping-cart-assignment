import { combineReducers } from 'redux';

import bannersReducer from './bannersReducer';
import cartReducer from './cartReducer';
import categoriesReducer from './categoriesReducer';
import productsReducer from './productsReducer';

export default combineReducers({
  bannersReducer,
  cartReducer,
  categoriesReducer,
  productsReducer
});
