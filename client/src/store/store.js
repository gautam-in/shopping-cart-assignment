import { configureStore } from '@reduxjs/toolkit'
import productSlice from './productSlice'
import cartSlice from './cartSlice';

export const store = configureStore({
    reducer: {
        // all slice in key value pair
        // user: userSlice
        cart: cartSlice,
        product: productSlice
    }
})