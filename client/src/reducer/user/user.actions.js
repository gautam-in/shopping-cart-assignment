import UserActionTypes from "./user.types";

export const UserSignIn = () => ({
  type: UserActionTypes.SIGN_IN,
});

export const UserSignOut = () => ({
  type: UserActionTypes.SIGN_OUT,
});
