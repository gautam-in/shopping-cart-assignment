import { createSelector } from '@reduxjs/toolkit';

import { HomePageState } from './types';

export const initialState = {};

const selectSlice = (state: HomePageState) => state['homePage'] || {};

export const selectHomePage = createSelector([selectSlice], state => state);
export const selectHomePageLoading = createSelector(
  [selectSlice],
  state => state.loading,
);
export const selectHomePageBanners = createSelector(
  [selectSlice],
  state => state.banners,
);
export const selectHomePageError = createSelector(
  [selectSlice],
  state => state.error,
);

export const selectCategoryLoading = createSelector(
  [selectSlice],
  state => state.categoryLoading,
);
export const selectHomePageCategoryItems = createSelector(
  [selectSlice],
  state => state.categoryItems,
);
