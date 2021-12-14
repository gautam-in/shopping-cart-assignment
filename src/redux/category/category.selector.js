import { createSelector } from "reselect";

const categorySelector = (state) => state.category;

export const selectCategories = createSelector(
  [categorySelector],
  (category) => category.categories
);
