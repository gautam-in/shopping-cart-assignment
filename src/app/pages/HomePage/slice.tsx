import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { homePageSaga } from './saga';
import { HomePageState } from './types';

export const initialState: HomePageState = {
  banners: [],
  loading: false,
};

const slice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    getBanners(state) {
      state.loading = false;
    },
  },
});

export const { actions: homePageActions } = slice;

export const useHomePageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: homePageSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useHomePageSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
