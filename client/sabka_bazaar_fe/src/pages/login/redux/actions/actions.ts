import { Login } from "models/login";
import { IFluxStandardAction } from "store/interfaces";
import { LOGIN, LOGOUT } from "./actionTypes";

const postLogin = (payload: Login): IFluxStandardAction<Login> => {
  return {
    type: LOGIN.POST.LOADING,
    payload
  };
};

const postLoginSuccess = (payload: Login["email"]): IFluxStandardAction<Login["email"]> => {
  return {
    type: LOGIN.POST.SUCCESS,
    payload
  };
};

const postLoginError = (error: string): IFluxStandardAction<string> => {
  return {
    type: LOGIN.POST.ERROR,
    payload: error
  };
};

const clearStore = () => {
  return {
    type: LOGOUT.CLEAR
  };
};

export const LoginActions = { postLogin, postLoginSuccess, postLoginError, clearStore };
