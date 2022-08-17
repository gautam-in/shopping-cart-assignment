import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { BannerItem } from 'types/banners';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { homePageSaga } from './saga';
import { HomePageState } from './types';

export const initialState: HomePageState = {
  banners: [],
  loading: true,
  error: 'null',
};

const slice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    getBanners(state) {
      state.loading = true;
    },
    getBannersData(state, actions: PayloadAction<BannerItem[]>) {
      state.loading = false;
      state.banners = actions.payload;
    },
    getBannersDataError(state, actions: PayloadAction<string>) {
      state.loading = false;
      state.error = actions.payload;
    },
  },
});

export const { actions: homePageActions } = slice;

export const useHomePageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: homePageSaga });
  return { actions: slice.actions };
};
