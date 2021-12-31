import { takeLatest, call, put, all } from 'redux-saga/effects';

import { UserActionTypes } from './types';
import { registerSuccess, loginSuccess, signoutUserSuccess } from './actions';
import { triggerNotification } from './../Home/actions';


function* registerUserStart({ payload }) {
  try {
    const { email, pwd, firstName, lastName } = payload;
    const users = yield JSON.parse(localStorage.getItem('users')) || [];
    const userAlreadyRegistered = !!users.find(user => user.email === email);
    if(!userAlreadyRegistered) {
      const updatedUsers = [...users, { email, pwd, firstName, lastName, userLoggedIn: true }]
      yield localStorage.setItem('users', JSON.stringify(updatedUsers));
      yield put(registerSuccess({ email, firstName, lastName }));
    } else {
      const errObj = { hasError: true, message: 'User Already registered'};
      yield put(triggerNotification({...errObj}));
    }
  } catch(err) {
    const message = err.message ? err.message : 'Internal Server Error';
    const errObj = { hasError: true, message: message };
    yield put(triggerNotification({...errObj}));
  }
}

function* loginUserStart({ payload }) {
  try {
    const { email, pwd } = payload;
    const users = yield JSON.parse(localStorage.getItem('users')) || [];
    const userAuthenticated = users.find(user => (user.email === email && user.pwd === pwd));
    if(!!userAuthenticated) {
      const { email, firstName, lastName } = userAuthenticated;
      const updatedUsers = users.map(user => {
        if(user.email === email) {
          return {
            ...user,
            userLoggedIn: true
          }
        }
        return user;
      });
      yield localStorage.setItem('users', JSON.stringify(updatedUsers));
      yield put(loginSuccess({ email, firstName, lastName }));
    } else {
      const errObj = { hasError: true, message: 'Invalid Credentials'};
      yield put(triggerNotification({...errObj}));
    }
  } catch(err) {
    const message = err.message ? err.message : 'Internal Server Error';
    const errObj = { hasError: true, message: message };
    yield put(triggerNotification({...errObj}));
  }
}

function* checkAuthStart() {
  try {
    const users = yield JSON.parse(localStorage.getItem('users')) || [];
    const loggedInUser = users.find(user => user.userLoggedIn);
    if(loggedInUser) {
      const { email, firstName, lastName } = loggedInUser
      yield put(loginSuccess({ email, firstName, lastName }));
    }
  } catch(err) {
    const message = err.message ? err.message : 'Internal Server Error';
    const errObj = { hasError: true, message: message };
    yield put(triggerNotification({...errObj}));
  }
}

function* signoutUserStart({ payload }) {
  try {
    const { email } = payload;
    const users = yield JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = users.map(user => {
      if(user.email === email) {
        return {
          ...user,
          userLoggedIn: false
        }
      }
      return user;
    });
    yield localStorage.setItem('users', JSON.stringify(updatedUsers));
    yield put(signoutUserSuccess());
  } catch(err) {
    const message = err.message ? err.message : 'Internal Server Error';
    const errObj = { hasError: true, message: message };
    yield put(triggerNotification({...errObj}));
  }
}

function* registerUser() {
  yield takeLatest(
    UserActionTypes.REGISTER_USER_START,
    registerUserStart
  );
}

function* loginUser() {
  yield takeLatest(
    UserActionTypes.LOGIN_USER_START,
    loginUserStart
  );
}

function* checkAuth() {
  yield takeLatest(
    UserActionTypes.CHECK_AUTH_START,
    checkAuthStart
  )
}

function* signoutUser() {
  yield takeLatest(
    UserActionTypes.SIGN_OUT_USER_START,
    signoutUserStart
  )
}

export default function* userSagas() {
  yield all([
    call(registerUser),
    call(loginUser),
    call(checkAuth),
    call(signoutUser)
  ]);
}