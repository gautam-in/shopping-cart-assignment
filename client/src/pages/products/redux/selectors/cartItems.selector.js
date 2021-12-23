import { createSelector } from 'reselect';

const cartItemsSelect = (state) => state.cartItems;

const selectCartItemsData = createSelector(cartItemsSelect, (cartItems) => cartItems.cartItemData);

export const getcartItemsSelectors = {
  selectCartItemsData,
};
