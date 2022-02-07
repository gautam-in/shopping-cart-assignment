import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Products/cardSlice";
import productReducer from "./Products/productSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});
