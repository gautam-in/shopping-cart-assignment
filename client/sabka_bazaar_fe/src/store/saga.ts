import homeWatcherSaga from "modules/home/redux/saga/saga";
import loginWatcherSaga from "modules/login/redux/saga/saga";
import signUpWatcherSaga from "modules/register/redux/saga/saga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([loginWatcherSaga(), signUpWatcherSaga(), homeWatcherSaga()]);
}
