import { createSelector } from 'reselect';

export const cartSelector = (state) => state.cart;

export const allCartData = createSelector(cartSelector, (cartHash) => {
  return {
    ...cartHash,
    data: cartHash.data && Object.keys(cartHash.data).length > 0 ? Object.values(cartHash.data) : []
  };
});
