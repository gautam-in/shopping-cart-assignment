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
