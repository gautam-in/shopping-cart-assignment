import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './reducers/homeReducer';
import productReducer from './reducers/productReducer';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    product: productReducer
  },
})