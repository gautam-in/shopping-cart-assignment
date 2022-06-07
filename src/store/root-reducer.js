import { combineReducers } from "redux";
import { userReducer } from "./slices/user/user.reducer";
import { cartReducer } from "./slices/cart/cart.reducer";
import { categoriesReducer } from "./slices/categories/categories.reducer";
import { productReducer } from "./slices/products/products.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  categories: categoriesReducer,
  products: productReducer,
});
