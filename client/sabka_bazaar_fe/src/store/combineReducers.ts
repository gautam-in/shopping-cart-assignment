import homeReducer from "modules/home/redux/reducers/reducer";
import loginReducer from "modules/login/redux/reducers/reducer";
import productsReducer from "modules/products/redux/reducers/reducer";
import signUpReducer from "modules/register/redux/reducers/reducer";
import cartReducer from "modules/cart/redux/reducers/reducer";
import { combineReducers } from "redux";
import { LOGOUT } from "modules/login/redux/actions/actionTypes";

const appReducer = combineReducers({
  login: loginReducer,
  signUp: signUpReducer,
  home: homeReducer,
  products: productsReducer,
  cart: cartReducer
});

const rootReducer = (state: any, action: any) => {
  if (action.type === LOGOUT.CLEAR) {
    state.login = undefined;
    state.signUp = undefined;
    state.products = undefined;
    state.cart = undefined;
  }
  return appReducer(state, action);
};
export default rootReducer;
