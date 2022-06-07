import { UPDATE_AUTH_STATUS } from "./AuthActionTypes";

export const updateAuthStatus = (status) => {
  return {
    type: UPDATE_AUTH_STATUS,
    payload: status,
  };
};
