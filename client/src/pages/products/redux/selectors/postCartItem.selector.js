import { createSelector } from 'reselect';

const postCartItemSelect = (state) => state.postCartItem;

const selectPostCartItemData = createSelector(postCartItemSelect, (postCartItem) => postCartItem.postCartItemData);
const selectPostCartItemLoading = createSelector(postCartItemSelect, (postCartItem) => postCartItem.loading);
const selectPostCartItemError = createSelector(postCartItemSelect, (postCartItem) => postCartItem.error);

export const postCartItemSelectors = {
  selectPostCartItemData,
  selectPostCartItemLoading,
  selectPostCartItemError,
};
