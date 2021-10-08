import { all } from "redux-saga/effects";
import signInWatcherSaga from "modules/signIn/redux/saga/saga";
import signUpWatcherSaga from "modules/signUp/redux/saga/saga";
import productsWatcherSaga from "modules/products/redux/saga/saga";
import homeWatcherSaga from "modules/home/redux/saga/saga";

export default function* rootSaga() {
  yield all([signInWatcherSaga(), signUpWatcherSaga(), homeWatcherSaga(), productsWatcherSaga()]);
}
