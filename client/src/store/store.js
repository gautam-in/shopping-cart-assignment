import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartReducer'

// Configure app store.
export default configureStore({
  reducer: {
    cartReducer: cartSlice.reducer
  }
})