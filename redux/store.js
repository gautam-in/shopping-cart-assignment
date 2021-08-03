import { createStore } from "redux";
import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { productsReducer } from "./productsReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  user: userReducer,
});

export const store = createStore(rootReducer);
