import { createSelector } from 'reselect';

const productsSelect = (state) => state.products;

const selectProductsData = createSelector(productsSelect, (products) => products.productsData);
const selectProductsLoading = createSelector(productsSelect, (products) => products.loading);
const selectProductsError = createSelector(productsSelect, (products) => products.error);

export const getProductsSelectors = {
  selectProductsData,
  selectProductsLoading,
  selectProductsError,
};
