import { combineReducers } from 'redux';
import { productsReducer } from '../pages/products/redux/reducers';
import { homeReducer } from '../pages/home/redux/reducers/';

const rootReducer = combineReducers({
  banner: homeReducer.getBannerReducer,
  categories: homeReducer.getCategoriesReducer,
  products: productsReducer.getProductsReducer,
  cartItems: productsReducer.cartItemReducer,
  postCartItem: productsReducer.postCartItemReducer,
});

export default rootReducer;
