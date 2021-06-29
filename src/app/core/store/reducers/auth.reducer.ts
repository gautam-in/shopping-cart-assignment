import { createReducer, on } from '@ngrx/store';
import * as AuthActions from 'src/app/core/store/actions/auth.actions';
import { AuthState } from '../../models/auth-state.model';
import { User } from '../../models/user.model';

const initialState: AuthState = {
  user: null,
  authError: '',
  loading: false,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.authenticateSuccess, (state, action) => {
    const user = new User(
      action.email,
      action.userId,
      action.token,
      new Date(action.expirationDate)
    );
    return {
      ...state,
      ...initialState,
      user,
    };
  }),
  on(AuthActions.logout, (state, action) => {
    return {
      ...state,
      ...initialState,
    };
  }),
  on(AuthActions.LoginStart, (state, action) => {
    return {
      ...state,
      ...initialState,
      loading: true,
    };
  }),
  on(AuthActions.signupStart, (state, action) => {
    return {
      ...state,
      ...initialState,
      loading: true,
    };
  }),
  on(AuthActions.logout, (state, action) => {
    return {
      ...state,
      ...initialState,
    };
  }),
  on(AuthActions.authenticateFail, (state, action) => {
    return {
      ...state,
      ...initialState,
      authError: action.reason,
    };
  }),
  on(AuthActions.clearError, (state, action) => {
    return {
      ...state,
      ...initialState,
      authError: '',
    };
  })
);
