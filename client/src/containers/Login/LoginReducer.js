import { checkLoggedIn } from "../../services/LoginService";
import LoginActionTypes from "./LoginTypes";

const INITIAL_STATE = {
  loading: false,
  isLoggedIn: checkLoggedIn(),
  isError: false,
};

const LoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LoginActionTypes.GET_LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case LoginActionTypes.GET_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        isError: false,
      };

    case LoginActionTypes.GET_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
        isError: true,
      };
    case LoginActionTypes.GET_LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        isError: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default LoginReducer;
