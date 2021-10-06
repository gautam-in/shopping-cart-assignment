import { USER_LOGGED, USER_LOGOUT } from "./loginTypes";

const intialState = {
  logged: false,
};

const loginReducer = (state = intialState, action) => {
  switch (action.type) {
    case USER_LOGGED:
      return {
        logged: true,
      };
    case USER_LOGOUT:
      return {
        logged: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
