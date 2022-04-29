import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import uiSlice from "./uiSlice";

const store = configureStore({
  reducer: { cartReducer: cartSlice.reducer, uiReducer: uiSlice.reducer },
});

export default store;
