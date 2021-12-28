import { createSelector } from 'reselect';

const selectProductsState = state => state.products;

export const selectProducts = createSelector(
  [selectProductsState],
  (productsState) => productsState.products
);