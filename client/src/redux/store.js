import { configureStore } from '@reduxjs/toolkit'
import productCategoryReducer from './productCategorySlice'
import productCartsReducer from './productCartsSlice'
export const store = configureStore({
  reducer: {
    productCategory:productCategoryReducer,
    productCarts:productCartsReducer
  },
})