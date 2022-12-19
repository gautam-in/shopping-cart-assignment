import { configureStore } from '@reduxjs/toolkit';

import bannerReducer from '../features/banner/BannerSlice'
import categoryReducer from '../features/categories/CategorySlice'
import productReducer from '../features/productList/ProductListSlice'
import cartReducer from '../features/cart/CartSlice'

export const store = configureStore({
  reducer: {
    banner: bannerReducer,
    category: categoryReducer,
    product: productReducer,
    cart: cartReducer
  },
});

