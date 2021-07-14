import { LOGIN_USER, LOGOUT_USER } from "../constants/constants";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn")
    ? JSON.parse(localStorage.getItem("isLoggedIn"))
    : false,
  userDetails: localStorage.getItem("userDetails")
    ? JSON.parse(localStorage.getItem("userDetails"))
    : {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER: {
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("userDetails", JSON.stringify(action.payload));
      return {
        ...state,
        userDetails: action.payload,
        isLoggedIn: !state.isLoggedIn,
      };
    }
    case LOGOUT_USER: {
      localStorage.setItem("isLoggedIn", false);
      localStorage.setItem("userDetails", JSON.stringify({}));
      return {
        ...state,
        userDetails: {},
        isLoggedIn: !state.isLoggedIn,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
