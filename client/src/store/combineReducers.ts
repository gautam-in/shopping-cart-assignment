import { combineReducers } from "redux";
import signInReducer from "modules/signIn/redux/reducers/reducer";
import { LOGOUT } from "modules/signIn/redux/actions/actionTypes";
import signUpReducer from "modules/signUp/redux/reducers/reducer";
import productsReducer from "modules/products/redux/reducers/reducer";
import homeReducer from "modules/home/redux/reducers/reducer";
import cartReducer from "modules/cart/redux/reducers/reducer";

const appReducer = combineReducers({
  signIn: signInReducer,
  signUp: signUpReducer,
  home: homeReducer,
  products: productsReducer,
  cart: cartReducer
});

const rootReducer = (state: any, action: any) => {
  if (action.type === LOGOUT.CLEAR) {
    state.signIn = undefined;
    state.signUp = undefined;
    state.home = undefined;
    state.products = undefined;
    state.cart = undefined;
  }
  return appReducer(state, action);
};
export default rootReducer;
