import { createSelector } from '@reduxjs/toolkit';
import get from 'lodash/get';
import { ProductListingState } from './types';

export const initialState = {};

const selectSlice = (state: ProductListingState) =>
  get(state,'productListing', initialState);

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
  state => get(state,'data.categoriesRes', []),
);

export const selectProductListingProducts = createSelector(
  [selectSlice],
  state => get(state,'data.productsRes',[]),
);
