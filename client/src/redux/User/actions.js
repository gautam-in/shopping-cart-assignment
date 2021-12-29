import { UserActionTypes } from "./types";

export const login = emailAndPassword => {
  return {
    type: UserActionTypes.LOGIN_USER_START,
    payload: emailAndPassword
  };
}

export const loginSuccess = userDetails => {
  return {
    type: UserActionTypes.LOGIN_USER_SUCCESS,
    payload: userDetails
  };
}

export const register = userDetails => {
  return {
    type: UserActionTypes.REGISTER_USER_START,
    payload: userDetails
  };
}

export const registerSuccess = userDetails => {
  return {
    type: UserActionTypes.REGISTER_USER_SUCCESS,
    payload: userDetails
  };
}