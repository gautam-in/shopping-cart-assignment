import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './CartSlice'

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
})