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

export const selectFilteredProducts = createSelector(
  [selectProducts, (state, categoryId) => categoryId],

  (products, categoryId) => {
    if (categoryId == "") {
      return products;
    }
    return products.filter((product) => categoryId === product.category);
  }
);
export const selectIsCategoriesLoading = createSelector(
  [selectSlice],
  (state) => state.isCategoriesLoading
);
