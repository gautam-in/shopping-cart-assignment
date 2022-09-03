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

export const selectIsProductsLoading = createSelector(
  [selectSlice],
  (state) => state.isProductsLoading
);

export const selectProductsError = createSelector(
  [selectSlice],
  (state) => state.productsError
);
export const selectCategoriesError = createSelector(
  [selectSlice],
  (state) => state.categoriesError
);
