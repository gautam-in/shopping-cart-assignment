import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.category;


export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categorySlice) => categorySlice.categoryItems
)


export const selectCategoryData = createSelector(
    [selectCategories], (categoryItems) => categoryItems
)