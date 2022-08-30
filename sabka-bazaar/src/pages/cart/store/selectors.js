import { createSelector } from "@reduxjs/toolkit";

const selectSlice = (state) => state["cart"] || {};

export const selectIsAddToCartSuccess = createSelector(
  [selectSlice],
  (state) => state.isAddToCartSuccess
);
export const selectIsAddingToCartLoading = createSelector(
  [selectSlice],
  (state) => state.addToCartLoading
);

export const selectCartItems = createSelector(
  [selectSlice],
  (state) => state.cart
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((cartTotal, cartItem) => cartTotal + cartItem.quantity, 0)
);
