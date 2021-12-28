import { createSelector } from 'reselect';

const selectHome = state => state.home;

export const selectBanners = createSelector(
  [selectHome],
  (homeState) => homeState.banners
);

export const selectCategories = createSelector(
  [selectHome],
  (homeState) => homeState.categories
);