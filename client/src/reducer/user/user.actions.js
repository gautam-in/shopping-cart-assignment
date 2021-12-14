import UserActionTypes from "./user.types";

export const userSignIn = () => ({
  type: UserActionTypes.SIGN_IN,
});

export const userSignOut = () => ({
  type: UserActionTypes.SIGN_OUT,
});
