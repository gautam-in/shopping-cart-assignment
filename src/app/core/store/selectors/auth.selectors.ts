import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '../../models/auth-state.model';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const isLoggedIn = createSelector(
  selectAuthState,
  (auth) => !!auth.user
);

export const isLoggedOut = createSelector(isLoggedIn, (loggedIn) => !loggedIn);
