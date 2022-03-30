import AuthActionTypes from "./auth.types";

const INITIAL_STATE = {
  errorMessage: null,
  currentUser: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthActionTypes.REGISTER_FAILURE:
    case AuthActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case AuthActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
