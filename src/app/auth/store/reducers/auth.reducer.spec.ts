import { authReducer, State } from './auth.reducer';
import * as AuthActions from '../actions/auth.actions';
import { mockUser } from '../../mock/user.mock';

describe('AuthReducer', () => {
  it('should null user on logout action', () => {
    const initialState: State = {
      user: mockUser,
      authError: null,
      loading: false,
    };
    expect(authReducer(initialState, AuthActions.Logout).user).toEqual(null);
  });

  it('should set user on AuthenticateSuccess action', () => {
    const initialState: State = {
      user: null,
      authError: null,
      loading: false,
    };
    expect(
      authReducer(initialState, AuthActions.AuthenticateSuccess(mockUser)).user
        ?.email
    ).toEqual(mockUser.email);
  });

  it('should set loading true and authError to null on LoginStart action', () => {
    const initialState: State = {
      user: null,
      authError: 'error',
      loading: false,
    };
    const expected: State = {
      user: null,
      authError: null,
      loading: true,
    };
    expect(authReducer(initialState, AuthActions.LoginStart(mockUser))).toEqual(
      expected
    );
  });
  it('should set loading true and authError to null on SignupStart action', () => {
    const initialState: State = {
      user: null,
      authError: 'error',
      loading: false,
    };
    const expected: State = {
      user: null,
      authError: null,
      loading: true,
    };
    expect(
      authReducer(initialState, AuthActions.SignupStart(mockUser))
    ).toEqual(expected);
  });

  it('should set authError to null on ClearError action', () => {
    const initialState: State = {
      user: null,
      authError: 'error',
      loading: false,
    };
    const expected: State = {
      user: null,
      authError: null,
      loading: false,
    };
    expect(authReducer(initialState, AuthActions.ClearError)).toEqual(expected);
  });

  it('should set authError to null on ClearError action', () => {
    expect(
      authReducer(undefined, AuthActions.AuthenticateFail({ payload: 'error' }))
        .authError
    ).toEqual('error');
  });
});
