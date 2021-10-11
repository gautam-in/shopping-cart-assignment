import { SignUp } from "models/signIn";
import { SIGNUP } from "../actions/actionTypes";

export interface ISignUpLoading {
  isSignup: boolean;
}

export interface ISignUpError {
  isSignup: string;
}

export const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: ""
};

export interface ISignUpState {
  user: SignUp;
  error: ISignUpError;
  loading: ISignUpLoading;
}

export const signUpInitialState: ISignUpState = {
  user: initialValues,
  error: { isSignup: "" },
  loading: { isSignup: false }
};

const signUpReducer = (state = signUpInitialState, action: { payload: any; type: string }): ISignUpState => {
  switch (action.type) {
    case SIGNUP.POST.LOADING:
      return { ...state, loading: { ...state.loading, isSignup: true }, error: { ...state.error, isSignup: null } };
    case SIGNUP.POST.SUCCESS:
      return { ...state, loading: { ...state.loading, isSignup: false }, user: { ...state.user, ...action.payload } };
    case SIGNUP.POST.ERROR:
      return { ...state, loading: { ...state.loading, isSignup: false }, error: { ...state.error } };
    default:
      return state;
  }
};
export default signUpReducer;
