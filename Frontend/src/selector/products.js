import {createSelector} from 'reselect';

export const productSelector = (state) => state.products;

export const allProductsData = createSelector(
  productSelector,
  (productsHash) => {
    return {
      ...productsHash,
      data:
        productsHash.data && Object.keys(productsHash.data).length > 0
          ? Object.values(productsHash.data)
          : [],
    };
  },
);
