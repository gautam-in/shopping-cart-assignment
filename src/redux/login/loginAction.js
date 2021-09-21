import { USER_LOGGED, USER_LOGOUT } from "./loginTypes";

export const userLoginRequest = () => {
  return {
    type: USER_LOGGED,
  };
};

export const userLogoutRequest = () => {
  return {
    type: USER_LOGOUT,
  };
};
