import { takeLatest, put, all, call } from "redux-saga/effects";
import LoginActionTypes from "./LoginTypes";
import {
  getLoginSuccess,
  getLoginFailure,
  getLogoutSuccess,
} from "./LoginActions";
import { resetProductsStart } from "../Products/ProductActions";

// get login
export function* getLoginStart({ payload }) {
  const user =
    window.localStorage.getItem("user") &&
    JSON.parse(window.localStorage.getItem("user"));

  if (user?.email === payload?.email && user?.password === payload?.password) {
    window.localStorage.setItem("isLoggedIn", JSON.stringify(true));
    yield put(getLoginSuccess(payload));
  } else {
    yield put(getLoginFailure());
  }
}

export function* getLogin() {
  yield takeLatest(LoginActionTypes.GET_LOGIN_START, getLoginStart);
}
// get products

export function* getLogoutStart() {
  yield put(resetProductsStart());
  yield window.localStorage.setItem("isLoggedIn", JSON.stringify(false));
  yield put(getLogoutSuccess());
}

export function* getLogout() {
  yield takeLatest(LoginActionTypes.GET_LOGOUT_START, getLogoutStart);
}

export function* LoginSaga() {
  yield all([call(getLogin), call(getLogout)]);
}
