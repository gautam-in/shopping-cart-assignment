import { createSelector } from 'reselect';

const selectUser = state => state.userLogin;

export const selectCurrentUser = createSelector(
  [selectUser],
  userLogin => userLogin.userInfo
);
