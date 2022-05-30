import { combineReducers } from "redux";
import { userReducer } from "./slices/user/user.reducer";
import { cartReducer } from "./slices/cart/cart.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});
