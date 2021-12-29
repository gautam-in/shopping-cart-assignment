import { takeLatest, call, put, all } from 'redux-saga/effects';

import { UserActionTypes } from './types';
import { registerSuccess, loginSuccess } from './actions';


function* registerUserStart({ payload }) {
  try {
    const { email, pwd, firstName, lastName } = payload;
    const users = yield JSON.parse(localStorage.getItem('users'));
    const userAlreadyRegistered = !!users.find(user => user.email === email);
    if(!userAlreadyRegistered) {
      const updatedUsers = [...users, { email, pwd, firstName, lastName }]
      yield localStorage.setItem('users', JSON.stringify(updatedUsers));
    } else {
      console.log("User Already registered")
    }
    yield put(registerSuccess({ email, firstName, lastName }));
  } catch(err) {
    console.log(err);
  }
}

function* loginUserStart({ payload }) {
  try {
    const { email, pwd } = payload;
    const users = yield JSON.parse(localStorage.getItem('users'));
    const userAuthenticated = users.find(user => (user.email === email && user.pwd === pwd));
    if(!!userAuthenticated) {
      const { email, firstName, lastName } = userAuthenticated;
      yield put(loginSuccess({ email, firstName, lastName }));
    } else {
      console.log("Invalid Credentials")
    }
  } catch(err) {
    console.log(err);
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

export default function* userSagas() {
  yield all([
    call(registerUser),
    call(loginUser)
  ]);
}