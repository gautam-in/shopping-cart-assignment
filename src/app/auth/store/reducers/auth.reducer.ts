import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../../models/user.model';
import * as AuthActions from '../actions/auth.actions';

export interface State {
  user: User | null;
  authError: string | null;
  loading: boolean;
}

const initialState: State = {
  user: null,
  authError: null,
  loading: false,
};

const _authReducer = createReducer(
  initialState,
  on(AuthActions.AuthenticateSuccess, (state, user) => {
    return {
      ...state,
      authError: null,
      user,
      loading: false,
    };
  }),
  on(AuthActions.Logout, (state) => {
    return {
      ...state,
      user: null,
    };
  }),
  on(AuthActions.LoginStart, (state) => {
    return {
      ...state,
      authError: null,
      loading: true,
    };
  }),
  on(AuthActions.SignupStart, (state) => {
    return {
      ...state,
      authError: null,
      loading: true,
    };
  }),
  on(AuthActions.AuthenticateFail, (state, data) => {
    return {
      ...state,
      user: null,
      authError: data.payload,
      loading: false,
    };
  }),
  on(AuthActions.ClearError, (state) => {
    return {
      ...state,
      authError: null,
    };
  })
);

export function authReducer(state = initialState, action: Action) {
  return _authReducer(state, action);
}
