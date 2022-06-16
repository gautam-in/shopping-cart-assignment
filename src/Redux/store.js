import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./Reducers/categorySlice";
import productReducer from "./Reducers/productsSlice";
import cartReducer from "./Reducers/cartSlice";
import LoginReducer from "./Reducers/LoginSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    category: categoryReducer,
    cart: cartReducer,
    login: LoginReducer,
  },
});

export default store;
