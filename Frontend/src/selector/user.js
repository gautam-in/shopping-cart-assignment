import {createSelector} from 'reselect';

export const userSelector = (state) => state.user;

export const user = createSelector(userSelector);
