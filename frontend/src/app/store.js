import { configureStore } from "@reduxjs/toolkit";
import bannerReducer from "../Features/banner/bannerSlice";
import categoriesReducer from "../Features/categories/categoriesSlice";
import userReducer from "../Features/user/userSlice";
import productsReducer from "../Features/products/productsSlice";
import cartReducer from "../Features/shopping-cart/cartSlice";
export const store = configureStore({
  reducer: {
    banner: bannerReducer,
    categories: categoriesReducer,
    user: userReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});
