import { Action } from '@ngrx/store';
import {
  AuthenticationSuccessPayload,
  LoginPayLoad,
} from '../../models/store-payload.model';

export const LOGIN_START = '[Auth] Login Start';
export const AUTHENTICATE_SUCCESS = '[Auth] Success';
export const AUTHENTICATE_FAIL = '[Auth] Login Fail';
export const SIGNUP_START = '[Auth] Signup Start';
export const CLEAR_ERROR = '[Auth] Clear Error';
export const AUTO_LOGIN = '[Auth] Auto Login';
export const LOGOUT = '[Auth] Logout';

export class AuthenticateSuccess implements Action {
  readonly type = AUTHENTICATE_SUCCESS;
  constructor(public payload: AuthenticationSuccessPayload) {}
}
export class Logout implements Action {
  readonly type = LOGOUT;
  constructor(public payload?: any) {}
}

export class LoginStart implements Action {
  readonly type = LOGIN_START;
  constructor(public payload: LoginPayLoad) {}
}

export class AuthenticateFail implements Action {
  readonly type = AUTHENTICATE_FAIL;

  constructor(public payload: string) {}
}

export class SignupStart implements Action {
  readonly type = SIGNUP_START;

  constructor(public payload: LoginPayLoad) {}
}

export class ClearError implements Action {
  readonly type = CLEAR_ERROR;
  constructor(public payload?: any) {}
}

export class AutoLogin implements Action {
  readonly type = AUTO_LOGIN;
  constructor(public payload?: any) {}
}

export type AuthActions =
  | AuthenticateSuccess
  | Logout
  | LoginStart
  | AuthenticateFail
  | SignupStart
  | ClearError
  | AutoLogin;
