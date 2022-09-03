import { createSelector } from "@reduxjs/toolkit";

const selectSlice = (state) => state["home"] || {};

export const selectBanners = createSelector(
  [selectSlice],
  (state) => state.banners
);

export const selectCategories = createSelector(
  [selectSlice],
  (state) => state.categories
);

export const selectIsCategoriesLoading = createSelector(
  [selectSlice],
  (state) => state.isCategoriesLoading
);

export const selectIsBannersLoading = createSelector(
  [selectSlice],
  (state) => state.isBannersLoading
);

export const selectBannersError = createSelector(
  [selectSlice],
  (state) => state.bannersError
);
export const selectCategoriesError = createSelector(
  [selectSlice],
  (state) => state.categoriesError
);
