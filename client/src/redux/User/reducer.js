import { UserActionTypes } from "./types";

const INITIAL_STATE = {
  loggedInUser: null
};

const userReducer = (state=INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch(type) {
    case UserActionTypes.LOGIN_USER_SUCCESS:
    case UserActionTypes.REGISTER_USER_SUCCESS:
      return {
        ...state,
        loggedInUser: {...payload}
      }
    default:
      return state;
  }
}

export default userReducer;