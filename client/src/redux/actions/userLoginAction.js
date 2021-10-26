import { LOGIN_SUCCESS } from "./actionTypes";

export const LogginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  userData,
});
