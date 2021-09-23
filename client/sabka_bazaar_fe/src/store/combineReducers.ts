import homeReducer from "pages/home/redux/reducers/reducer";
import loginReducer from "pages/login/redux/reducers/reducer";
import productsReducer from "pages/products/redux/reducers/reducer";
import signUpReducer from "pages/register/redux/reducers/reducer";
import cartReducer from "pages/cart/redux/reducers/reducer";
import { combineReducers } from "redux";
import { LOGOUT } from "pages/login/redux/actions/actionTypes";

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
    state.cart = undefined;
    // state.products = undefined;
  }
  return appReducer(state, action);
};
export default rootReducer;
