import { configureStore } from '@reduxjs/toolkit'
import ProductSlicereducer  from './slices/products';

export const store = configureStore({
  reducer: {
    Products: ProductSlicereducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch