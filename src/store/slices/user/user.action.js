import { USER_ACTIONS } from "./user.types";

export const setCurrentUser = (payload) => ({
  type: USER_ACTIONS.SET_USER,
  payload: payload,
});
