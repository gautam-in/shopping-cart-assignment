import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  isLoggedIn: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case UserActionTypes.SIGN_OUT:
      return {
        ...state,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};

export default userReducer;
