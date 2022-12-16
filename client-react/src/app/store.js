import { configureStore } from '@reduxjs/toolkit';
import bannerReducer from '../features/banner/BannerSlice'

export const store = configureStore({
  reducer: {
    banner: bannerReducer

  },
});

