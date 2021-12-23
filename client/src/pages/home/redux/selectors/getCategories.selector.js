import { createSelector } from 'reselect';

const categoriesSelect = (state) => state.categories;

const selectCategoriesData = createSelector(categoriesSelect, (categories) => categories.categoriesData);
const selectCategoriesLoading = createSelector(categoriesSelect, (categories) => categories.loading);
const selectCategoriesError = createSelector(categoriesSelect, (categories) => categories.error);

export const getCategoriesSelectors = {
  selectCategoriesData,
  selectCategoriesLoading,
  selectCategoriesError,
};
