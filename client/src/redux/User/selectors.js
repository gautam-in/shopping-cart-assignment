import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectLoggedInUser = createSelector(
  [selectUser],
  (userState) => userState.loggedInUser
)