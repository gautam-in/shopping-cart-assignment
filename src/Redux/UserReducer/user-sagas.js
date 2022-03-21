import { takeEvery, put } from "redux-saga/effects";
import UserActionTypes from "./user-actiontypes";
import axios from "axios";

async function addUserAsync(payload) {
  await axios({
    method: "post",
    url: "/register",
    data: payload,
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw new Error(err);
    });
}

export function* addUserRequest({ data }) {
  try {
    const users = yield addUserAsync(data);
    yield put({ type: UserActionTypes.USER_ADDED, payload: users });
    yield put({ type: UserActionTypes.SET_USER, payload: true });
  } catch (e) {
    yield put({ type: UserActionTypes.USER_ERROR, payload: e.message });
    yield put({ type: UserActionTypes.SET_USER, payload: false });
  }
}

export function* registerUser() {
  yield takeEvery(UserActionTypes.REGISTER_USER, addUserRequest);
}

async function checkForUserAsync(payload) {
  await axios({
    method: "post",
    url: "/login",
    data: payload,
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw new Error(err);
    });
}

export function* checkUserExists({ data }) {
  try {
    yield checkForUserAsync(data);
    yield put({ type: UserActionTypes.SET_USER, payload: true });
  } catch (e) {
    yield put({ type: UserActionTypes.USER_ERROR, payload: e.message });
    yield put({ type: UserActionTypes.SET_USER, payload: false });
  }
}

export function* userExists() {
  yield takeEvery(UserActionTypes.CHECK_USER, checkUserExists);
}
