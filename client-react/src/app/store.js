import { configureStore } from '@reduxjs/toolkit';
import bannerReducer from '../features/banner/BannerSlice'
import categoryReducer from '../features/categories/CategorySlice'

export const store = configureStore({
  reducer: {
    banner: bannerReducer,
    category: categoryReducer

  },
});

