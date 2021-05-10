import {
   LOGIN_ACTION,
   LOGOUT_ACTION,
   REGISTER_ACTION,
} from './constants';

import axios from "axios"
import {User} from './user';

//Action Creator
export const loginAction = (email) => ({
   type: LOGIN_ACTION,
   payload: {
      email,
   }
});

export const logoutAction = () => ({
   type: LOGOUT_ACTION,
});

export const registerAction = (user) => ({
   type: REGISTER_ACTION,
   payload: {
      user,
   }
});


// API Calls
export function loginProcess(email) {
   return dispatch => {
      dispatch(loginAction(email))
   }
}
export function logoutProcess() {
   return dispatch => dispatch(logoutAction())
}

export function registerProcess(firstname, lastname, email, password) {
   return dispatch => dispatch(registerAction(new User(firstname, lastname, email, password)))
}