import { createAction } from "../../../utils/reducer/reducer.util";
import { USER_ACTIONS } from "./user.types";

export const setCurrentUser = (user) =>
  createAction(USER_ACTIONS.SET_CURRENT_USER, user);

export const checkCurrentUser = () =>
  createAction(USER_ACTIONS.CHECK_USER_SESSION);

export const signInwithEmail = (email, password) =>
  createAction(USER_ACTIONS.EMAIL_SIGNIN_START, { email, password });

export const signUpwithEmail = (email, password) =>
  createAction(USER_ACTIONS.EMAIL_SIGNUP_START, { email, password });

export const signInSuccess = (user) =>
  createAction(USER_ACTIONS.SIGN_IN_SUCCESS, user);

export const signInFailed = (error) =>
  createAction(USER_ACTIONS.SIGN_IN_FAILED, error);

export const signOutStart = () => createAction(USER_ACTIONS.SIGN_OUT_START);
export const signOutSuccess = () => createAction(USER_ACTIONS.SIGN_OUT_SUCCESS);
export const signOutFailed = () => createAction(USER_ACTIONS.SIGN_OUT_FAILED);
