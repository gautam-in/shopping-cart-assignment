import { createFeatureSelector } from '@ngrx/store';
import { AuthState } from '../../models/auth-state.model';

export const selectAuthState = createFeatureSelector<AuthState>('auth');
