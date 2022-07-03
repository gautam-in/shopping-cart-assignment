import { Login } from "models/login";
import { LOGIN } from "../actions/actionTypes";

export interface ILoginLoading {
  isLogin: boolean;
  login: boolean;
}

export interface ILoginError {
  isLogin: string;
  login: string;
}

export interface ILoginState {
  login: Login;
  error: ILoginError;
  loading: ILoginLoading;
}

export const loginInitialState: ILoginState = {
  login: { email: "", password: "" },
  error: { isLogin: "", login: "" },
  loading: { isLogin: false, login: false }
};

const loginReducer = (state = loginInitialState, action: { payload: any; type: string }): ILoginState => {
  switch (action.type) {
    case LOGIN.POST.LOADING:
      return { ...state, loading: { ...state.loading, isLogin: true }, error: { ...state.error, isLogin: null } };
    case LOGIN.POST.SUCCESS:
      return { ...state, loading: { ...state.loading, isLogin: false }, login: { ...state.login, email: action.payload } };
    case LOGIN.POST.ERROR:
      return { ...state, loading: { ...state.loading, isLogin: false }, error: { ...state.error } };
    default:
      return state;
  }
};
export default loginReducer;
