import { SignUp } from "models/login";
import { IFluxStandardAction } from "store/interfaces";
import { SIGNUP } from "./actionTypes";

interface user {
  email: SignUp["email"];
  firstName: SignUp["firstName"];
  lastName: SignUp["lastName"];
}

const postSignUp = (payload: SignUp): IFluxStandardAction<SignUp> => {
  return {
    type: SIGNUP.POST.LOADING,
    payload
  };
};
const postSignUpSuccess = (payload: user): IFluxStandardAction<user> => {
  return {
    type: SIGNUP.POST.SUCCESS,
    payload
  };
};
const postSignUpError = (error: string): IFluxStandardAction<string> => {
  return {
    type: SIGNUP.POST.ERROR,
    payload: error
  };
};

export const SignUpActions = { postSignUp, postSignUpSuccess, postSignUpError };
