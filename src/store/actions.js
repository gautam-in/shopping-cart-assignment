import * as actionTypes from './actionTypes';

export const setUserLoggedInStatus = (isUserLoggedIn) => ({
    type: actionTypes.SET_USER_LOGGED_IN_STATUS,
    payload: isUserLoggedIn
});