import {FETCH_USER_SUCCESS, USER_LOGOUT_SUCESS} from '../types';

export const fetchUserDataSuccess = (user) => ({
  type: FETCH_USER_SUCCESS,
  user,
});

export const userLogout = () => ({
  type: USER_LOGOUT_SUCESS,
});
