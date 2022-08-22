import { createSelector } from '@reduxjs/toolkit';
import { ProductListingState } from './types';

export const initialState = {};

const selectSlice = (state: ProductListingState) =>
  state['productListing'] || initialState;

export const selectProductListing = createSelector(
  [selectSlice],
  state => state,
);

export const selectProductListingLoading = createSelector(
  [selectSlice],
  state => state.loading,
);

export const selectProductListingCategories = createSelector(
  [selectSlice],
  state => state.data.categoriesRes,
);

export const selectProductListingProducts = createSelector(
  [selectSlice],
  state => state.data.productsRes,
);
