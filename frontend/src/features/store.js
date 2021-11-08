import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./products/cartSlice";
import productReducer from "./products/productSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});
