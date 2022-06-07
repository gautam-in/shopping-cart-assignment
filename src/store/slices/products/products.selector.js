import { createSelector } from "reselect";

export const selectProducts = (state) => state.products;

export const selectProductsList = createSelector(
  [selectProducts],
  (productsSlice) => productsSlice.products
);

export const selectProductsIsLoading = createSelector(
  [selectProducts],
  (productsSlice) => productsSlice.isLoading
);
