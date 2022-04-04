import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => {
  return state?.categories;
};

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice?.categories
);

export const selectCurrentCategory = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice?.currentCategory
);

export const selectIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
