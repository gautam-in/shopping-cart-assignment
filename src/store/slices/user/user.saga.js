import { call, all, takeLatest, put } from "redux-saga/effects";
import { USER_ACTIONS } from "./user.types";
import {
  createAuthUserWithEmailAndPassword,
  getCurrentUser,
  signInWithEmailAndPasswordFunction,
  signOutUser,
} from "../../../utils/firebase.utils";
import {
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
} from "./user.action";

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield put(signInSuccess(userAuth));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* emailSignIn({ payload }) {
  const { email, password } = payload;
  console.log(email, password);
  try {
    const { user } = yield call(
      signInWithEmailAndPasswordFunction,
      email,
      password
    );
    yield put(signInSuccess(user));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* emailSignUp({ payload }) {
  const { email, password } = payload;
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield put(signInSuccess(user));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signOut() {
  try {
    yield call(signOutUser);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailed());
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(USER_ACTIONS.EMAIL_SIGNIN_START, emailSignIn);
}

export function* onEmailSignUpStart() {
  yield takeLatest(USER_ACTIONS.EMAIL_SIGNUP_START, emailSignUp);
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTIONS.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield takeLatest(USER_ACTIONS.SIGN_OUT_START, signOut);
}

export function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(onEmailSignInStart),
    call(onEmailSignUpStart),
    call(onSignOutStart),
  ]);
}
