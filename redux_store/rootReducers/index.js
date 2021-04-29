import { combineReducers } from 'redux';

// import reducers
import banner from '../banner/reducer';
import category from '../category/reducer';
import product from '../product/reducer';
import cart from '../cart/reducer';

const rootReducer = combineReducers({
   banner,
   category,
   product,
   cart,
});

export default rootReducer;
