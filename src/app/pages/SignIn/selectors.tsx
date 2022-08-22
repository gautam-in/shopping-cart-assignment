import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { SignInState } from './types';

export const initialState: SignInState = {};

const selectSlice = (state: RootState) => state.signIn || initialState;

export const selectSignIn = createSelector([selectSlice], state => state);
