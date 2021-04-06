import {createSelector} from 'reselect';

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
