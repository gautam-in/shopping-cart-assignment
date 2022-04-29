import { USER_ACTION_TYPES } from '../../actionTypes/user';

export const USER_STATE = {
  isLoggedIn: false
};

export const userReducer = (
  state = USER_STATE,
  action = {}
) => {
  const { type } = action;

  switch (type) {
    case USER_ACTION_TYPES.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case USER_ACTION_TYPES.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};