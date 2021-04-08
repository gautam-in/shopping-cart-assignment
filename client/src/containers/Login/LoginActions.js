import LoginActionTypes from "./LoginTypes";

// get Login
export const getLoginStart = (data) => ({
  type: LoginActionTypes.GET_LOGIN_START,
  payload: data,
});

export const getLoginSuccess = (data) => ({
  type: LoginActionTypes.GET_LOGIN_SUCCESS,
  payload: data,
});

export const getLoginFailure = () => ({
  type: LoginActionTypes.GET_LOGIN_FAILURE,
});

// get Logout
export const getLogoutStart = () => ({
  type: LoginActionTypes.GET_LOGOUT_START,
});

export const getLogoutSuccess = () => ({
  type: LoginActionTypes.GET_LOGOUT_SUCCESS,
});
