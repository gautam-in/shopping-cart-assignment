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

export const selectNotificationError = createSelector(
  [selectHome],
  (homeState) => homeState.error
);

export const selectHomePageLoading = createSelector(
  [selectHome],
  (homeState) => homeState.isLoading
);