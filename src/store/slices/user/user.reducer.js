import { USER_ACTIONS } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTIONS.SET_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};
