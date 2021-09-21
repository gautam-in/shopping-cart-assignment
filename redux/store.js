/* eslint-disable import/prefer-default-export */

import { configureStore } from '@reduxjs/toolkit';

import productFilterReducer from './features/productFilterSlice';
import cartReducer from './features/cartSlice';

export const store = configureStore({
  reducer: {
    productFilter: productFilterReducer,
    cart: cartReducer,
  },
});
