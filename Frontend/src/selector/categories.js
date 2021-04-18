import {createSelector} from 'reselect';

export const categoriesSelector = (state) => state.categories;

export const allCategoriesData = createSelector(
  categoriesSelector,
  (categoriesHash) => {
    return {
      ...categoriesHash,
      data:
        categoriesHash.data && Object.keys(categoriesHash.data).length > 0
          ? Object.values(categoriesHash.data)
          : [],
    };
  },
);
