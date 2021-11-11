import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./cartReducer";
import { categoryReducer } from "./categoryReducer";
import { errorReducer } from "./errorReducer";
import { userReducer } from "./userReducer";

const store = createStore(
  combineReducers({
    cart: cartReducer,
    categories: categoryReducer,
    user: userReducer,
    error: errorReducer
  }),
  applyMiddleware(thunk)
);

export default store;
