import { UPDATE_AUTH_STATUS } from "./AuthActionTypes";

const auth = {
  isAuthenticated: false,
};

const authReducer = (state = auth, action) => {
  switch (action.type) {
    case UPDATE_AUTH_STATUS:
      return {
        isAuthenticated: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
