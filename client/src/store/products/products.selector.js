import { createSelector } from 'reselect';

const selectProductsReducer = (state) => {
  return state.products;
};

export const selectProducts = createSelector(
  [selectProductsReducer],
  (productSlice) => productSlice?.products
);
