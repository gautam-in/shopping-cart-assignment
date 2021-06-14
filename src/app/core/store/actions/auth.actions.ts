import { createAction, props } from '@ngrx/store';
import {
  AuthenticationSuccessPayload,
  LoginPayLoad,
} from '../../models/store-payload.model';

const LOGIN_START = '[Auth] Login Start';

const AUTHENTICATE_SUCCESS = '[Auth] Success';
const AUTHENTICATE_FAIL = '[Auth] Login Fail';
const SIGNUP_START = '[Auth] Signup Start';
const CLEAR_ERROR = '[Auth] Clear Error';
const AUTO_LOGIN = '[Auth] Auto Login';
const LOGOUT = '[Auth] Logout';

export const authenticateSuccess = createAction(
  AUTHENTICATE_SUCCESS,
  props<AuthenticationSuccessPayload>()
);

export const logout = createAction(LOGOUT);

export const LoginStart = createAction(LOGIN_START, props<LoginPayLoad>());

export const authenticateFail = createAction(
  AUTHENTICATE_FAIL,
  props<{ reason: string }>()
);

export const signupStart = createAction(SIGNUP_START, props<LoginPayLoad>());

export const clearError = createAction(CLEAR_ERROR);
export const autoLogin = createAction(AUTO_LOGIN);
