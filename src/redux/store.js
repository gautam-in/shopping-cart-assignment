import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import offerReducer from "./offerSlice";
import productReducer from "./productSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        offer: offerReducer,
        products: productReducer
    }
})