import UserActionTypes from "./user-actiontypes";

const INITIAL_STATE = {
  isUserLoggedIn: false,
  error: "",
};

const manageUserAction = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_USER:
      return { ...state, isUserLoggedIn: action.payload };

    case UserActionTypes.USER_ADDED:
      return { ...state };

    case UserActionTypes.USER_ERROR:
      return { ...state, error: action.payload };

    default:
      return { ...state };
  }
};

export default manageUserAction;
