import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth-slice'
import cartSlice from './cart-slice'
import filterSlice from './filter-slice'
import productSlice from './products-slice'

const store= configureStore({
    reducer: {
        auth: authSlice.reducer,
        product: productSlice.reducer,
        filterProduct: filterSlice.reducer,
        cart: cartSlice.reducer
    }
})

export default store