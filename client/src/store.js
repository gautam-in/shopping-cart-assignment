import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./features/category/categorySlice";
import cartReducer from './features/cart/cartSlice';

export default configureStore({
  reducer: {
    category: categoryReducer,
    cart: cartReducer,
  }
})
