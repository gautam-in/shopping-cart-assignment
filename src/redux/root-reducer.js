import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import serverReducer from './serverData/server.reducer';


const rootReducer = combineReducers({
    user: userReducer,
    cartReducer:cartReducer,
    serverReducer:serverReducer
  });
  
  export default rootReducer;