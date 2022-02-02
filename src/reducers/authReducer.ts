import {
  SIGNUP_USER,
  LOGIN_USER,
  LOGOUT_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
} from "../constants";
import { IAuth, IUser } from "@typings/state/index";
import { actionTypes } from "@typings/action";

interface IAction {
  type: actionTypes;
  payload: IAuth;
}

const initState: IAuth = {
  isAuthenticated: false,
  authUser: {},
  registeredUser: {},
  error: false,
  errorMsg: "",
  successMsg: "",
};
const getAuthUser = (user) => {
  return {
    fname: user.fname,
    lname: user.lname,
    email: user.email,
  };
};

const authReducer = (state = initState, action) => {
  console.log({ state, action });
  switch (action.type) {
    case SIGNUP_USER:
      return {
        ...state,
        error: false,
        errorMsg: "",
        registeredUser: { ...action.payload },
      };
    case LOGIN_USER:
      return {
        ...state,
        isAuthenticated: false,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        successMsg: action.payload.successMsg,
        authUser: getAuthUser(action.payload.registeredUser),
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: true,
        isAuthenticated: false,
        errorMsg: action.payload.errorMsg,
      };
    case LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        authUser: {},
      };
    default:
      return state;
  }
};

export default authReducer;
