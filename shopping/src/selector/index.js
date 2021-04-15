import {createSelector} from 'reselect';

export const productSelector = (state) => state.products;

export const getProducts = createSelector(
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
export const cartSelector = (state) => state.cart;

export const allCartData = createSelector(cartSelector, (cartHash) => {
  return {
    ...cartHash,
    data:
      cartHash.data && Object.keys(cartHash.data).length
        ? Object.values(cartHash.data)
        : [],
  };
});

export const selectCartProductIds = createSelector(cartSelector, (cartHash) => {
  const ProductIds =
    cartHash.data && Object.keys(cartHash.data).length
      ? Object.keys(cartHash.data)
      : [];
  return ProductIds;
});
