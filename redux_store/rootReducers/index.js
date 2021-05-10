import { combineReducers } from 'redux';

// import reducers
import banner from '../banner/reducer';
import category from '../category/reducer';
import product from '../product/reducer';
import cart from '../cart/reducer';
import user from '../user/reducer';

const rootReducer = combineReducers({
   banner,
   category,
   product,
   cart,
   user,
});

export default rootReducer;
