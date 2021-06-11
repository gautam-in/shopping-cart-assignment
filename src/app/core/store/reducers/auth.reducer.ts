import * as AuthActions from 'src/app/core/store/actions/auth.actions';
import { AuthState } from '../../models/auth-state.model';
import { User } from '../../models/user.model';

const initialState: AuthState = {
  user: null,
  authError: '',
  loading: false,
};

export function authReducer(state = initialState, action: any): AuthState {
  switch (action.type) {
    case AuthActions.AUTHENTICATE_SUCCESS:
      const user = new User(
        action.payload.email,
        action.payload.userId,
        action.payload.token,
        action.payload.expirationDate
      );
      return {
        ...state,
        ...initialState,
        user,
      };
    case AuthActions.LOGOUT:
      return {
        ...state,
        ...initialState,
      };
    case AuthActions.LOGIN_START:
    case AuthActions.SIGNUP_START:
      return {
        ...state,
        ...initialState,
        loading: true,
      };
    case AuthActions.AUTHENTICATE_FAIL:
      return {
        ...state,
        ...initialState,
        authError: action.payload,
      };
    case AuthActions.CLEAR_ERROR:
      return {
        ...state,
        authError: '',
      };
    default:
      return state;
  }
}
