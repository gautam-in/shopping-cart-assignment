import { createSelector } from '@reduxjs/toolkit';
import get from 'lodash/get';

import { MyCartState } from './types';

export const initialState = {};

const selectSlice = (state: MyCartState) => get(state, 'myCart', {});

export const selectMyCart = createSelector([selectSlice], state =>
  get(state, 'cart', {}),
);
