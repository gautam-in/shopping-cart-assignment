import { configureStore } from '@reduxjs/toolkit'
import productSlice from './products/productSlice'
import cartSlice from './cart/cartSlice';

export const store = configureStore({
    reducer: {
        // all slice in key value pair
        // user: userSlice
        cart: cartSlice,
        product: productSlice
    }
})