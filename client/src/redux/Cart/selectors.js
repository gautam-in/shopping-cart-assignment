import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectShowCart = createSelector(
  [selectCart],
  (cartState) => cartState.showCart
);

export const selectCartItems = createSelector(
  [selectCart],
  (cartState) => cartState.inCartItems
);

export const selectNoOfItems = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.length
);

export const selectCartTotalPrice = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((result, item) => {
      const { qty, price } = item;
      return result + (qty * price);
    }, 0);
  }
);