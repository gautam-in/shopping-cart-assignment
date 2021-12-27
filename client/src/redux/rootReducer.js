import { combineReducers } from 'redux';

import homeReducer from './Home/reducer';
import productsReducer from './Products/reducer';

const rootReducer = combineReducers({
  home: homeReducer,
  products: productsReducer
});

export default rootReducer;