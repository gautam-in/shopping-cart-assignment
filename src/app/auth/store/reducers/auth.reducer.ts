import { createReducer, on } from '@ngrx/store';
import { User } from '../../models/user.model';
import * as AuthActions from '../actions/auth.actions';
export interface State {
  user: User | null;
}

const initialState: State = {
  user: null,
};

const _authReducer = createReducer(
  initialState,
  on(AuthActions.LOGIN, (state, user) => {
    return {
      ...state,
      user,
    };
  }),
  on(AuthActions.LOGOUT, (state) => {
    return {
      ...state,
      user: null,
    };
  })
);
