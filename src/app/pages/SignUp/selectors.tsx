import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { SignUpState } from './types';

export const initialState: SignUpState = {};

const selectSlice = (state: RootState) => state.signUp || initialState;

export const selectSignUp = createSelector([selectSlice], state => state);
