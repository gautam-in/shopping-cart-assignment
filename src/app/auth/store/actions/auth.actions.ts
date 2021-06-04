import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const LoginStart = createAction('[Auth] Login Start', props<User>());
export const AuthenticateSuccess = createAction('[Auth] Login', props<User>());
export const AuthenticateFail = createAction(
  '[Auth] Login Fail',
  props<{ payload: string }>()
);
export const SignupStart = createAction('[Auth] Signup Start', props<User>());
export const ClearError = createAction('[Auth] Clear Error');
export const AutoLogin = createAction('[Auth] Auto Login');
export const Logout = createAction('[Auth] Logout');
