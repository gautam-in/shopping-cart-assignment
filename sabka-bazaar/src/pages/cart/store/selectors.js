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
