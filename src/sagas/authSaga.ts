import { put, all, takeLatest } from "redux-saga/effects";
import isEmpty from "lodash/isEmpty";
import { SIGNUP_USER, LOGIN_USER, LOGOUT_USER } from "../constants";
import * as actions from "../actions";

function* signUpUser() {
  // Nothing to do anything for now coz data need not to store in DB.
}

function* logInUser(actionPayload) {
  console.log("IN saga");
  const { email, password, registeredUser = {} } = actionPayload.payload;
  if (
    !isEmpty(registeredUser) &&
    email === registeredUser.email &&
    password === registeredUser.password
  ) {
    yield put(
      actions.loginUserSuccess({
        successMsg: "Logged in successfully !!",
        registeredUser,
      })
    );
  } else {
    // Either "USER" is not registered yet or passed incorrect credentials
    yield put(
      actions.loginUserFail({
        errorMsg: "Incorrect username or password or not registered yet !!",
      })
    );
  }
}

function* logOutUser() {
  // Nothing to do here for now
}

export default function* () {
  yield all([
    takeLatest(SIGNUP_USER, signUpUser),
    takeLatest(LOGIN_USER, logInUser),
    takeLatest(LOGOUT_USER, logOutUser),
  ]);
}
