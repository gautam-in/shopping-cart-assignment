import { createSelector } from "@reduxjs/toolkit";

const selectSlice = (state) => state["products"] || {};

export const selectProducts = createSelector(
  [selectSlice],
  (state) => state.products
);

export const selectCategories = createSelector(
  [selectSlice],
  (state) => state.categories
);

export const selectIsCategoriesLoading = createSelector(
  [selectSlice],
  (state) => state.isCategoriesLoading
);
