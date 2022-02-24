import {createSelector} from 'reselect';

const displayCategories = state => state.categories;

export const displayCategoryData = createSelector(
    [displayCategories],
    (category) => category.categoryData
)

export const filterCategoryData = createSelector(
    [displayCategoryData],
    (category) => category.filter(data => data.enabled === true)
)