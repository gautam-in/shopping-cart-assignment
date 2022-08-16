import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';

export const initialState = {};

const selectSlice = (state: RootState) => state.homePage || initialState;

export const selectHomePage = createSelector([selectSlice], state => state);
