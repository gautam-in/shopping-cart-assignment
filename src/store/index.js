import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import categoryReducer from "./categoryReducer";
import userSliceReducer from "./userReducer";
import productSliceReducer from "./productReducer";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    users: userSliceReducer,
    categories: categoryReducer,
    products: productSliceReducer,
  },
});

export default store;
