import { SignIn } from "models/signIn";
import { SET_USER_STATUS, SIGNIN } from "../actions/actionTypes";

export interface ISignInLoading {
  isSignIn: boolean;
  signIn: boolean;
}

export interface ISignInError {
  isSignIn: string;
  signIn: string;
}

export interface ISignInState {
  signIn: SignIn;
  error: ISignInError;
  loading: ISignInLoading;
  status: boolean;
}

export const initialValues = {
  email: "",
  password: ""
};

export const signInInitialState: ISignInState = {
  signIn: initialValues,
  error: { isSignIn: "", signIn: "" },
  loading: { isSignIn: false, signIn: false },
  status: false
};

const signInReducer = (state = signInInitialState, action: { payload: any; type: string }): ISignInState => {
  switch (action.type) {
    case SIGNIN.POST.LOADING:
      return { ...state, loading: { ...state.loading, isSignIn: true }, error: { ...state.error, isSignIn: null } };
    case SIGNIN.POST.SUCCESS:
      return { ...state, loading: { ...state.loading, isSignIn: false }, signIn: { ...state.signIn, email: action.payload } };
    case SIGNIN.POST.ERROR:
      return { ...state, loading: { ...state.loading, isSignIn: false }, error: { ...state.error } };
    case SET_USER_STATUS.SET.SUCCESS:
      return { ...state, loading: { ...state.loading, isSignIn: false }, status: action.payload };
    default:
      return state;
  }
};
export default signInReducer;
