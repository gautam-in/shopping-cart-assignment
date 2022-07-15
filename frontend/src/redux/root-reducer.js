import { combineReducers } from 'redux';
import cartReducer from './cart/cart.reducer';
import { userLoginReducer, userRegisterReducer } from './user/user.reducer';


const rootReducer = combineReducers({
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer
});

export default rootReducer;
