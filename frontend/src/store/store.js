import { configureStore } from '@reduxjs/toolkit'
import productSlice from './products/productSlice'
import cartSlice from './cart/cartSlice';

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        product: productSlice
    }
})