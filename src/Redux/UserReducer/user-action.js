import UserActionTypes from "./user-actiontypes";

export const setUser = (value) => ({
  type: UserActionTypes.SET_USER,
  payload: value,
});

export const registerUserToServer = (value) => ({
  type: UserActionTypes.REGISTER_USER,
  data: value,
});

export const checkUserExists = (value) => ({
  type: UserActionTypes.CHECK_USER,
  payload: value,
});
