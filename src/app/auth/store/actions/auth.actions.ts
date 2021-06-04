import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const LOGIN = createAction('LOGIN', props<User>());
export const LOGOUT = createAction('LOGOUT');
