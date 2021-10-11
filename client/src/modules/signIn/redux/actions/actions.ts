import { SignIn } from "models/signIn";
import { IFluxStandardAction } from "store/interfaces";
import { LOGOUT, SET_USER_STATUS, SIGNIN } from "./actionTypes";

const postSignIn = (payload: SignIn): IFluxStandardAction<SignIn> => {
  return {
    type: SIGNIN.POST.LOADING,
    payload
  };
};

const postSignInSuccess = (payload: SignIn["email"]): IFluxStandardAction<SignIn["email"]> => {
  return {
    type: SIGNIN.POST.SUCCESS,
    payload
  };
};

const postSignInError = (error: string): IFluxStandardAction<string> => {
  return {
    type: SIGNIN.POST.ERROR,
    payload: error
  };
};

const clearStore = () => {
  return {
    type: LOGOUT.CLEAR
  };
};

const setUserStatus = (status: boolean): IFluxStandardAction<boolean> => {
  return {
    type: SET_USER_STATUS.SET.SUCCESS,
    payload: status
  };
};

export const SignInActions = { postSignIn, postSignInSuccess, postSignInError, clearStore, setUserStatus };
