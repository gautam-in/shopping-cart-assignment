import cartWatcherSaga from "pages/cart/redux/saga/saga";
import homeWatcherSaga from "pages/home/redux/saga/saga";
import loginWatcherSaga from "pages/login/redux/saga/saga";
import productsWatcherSaga from "pages/products/redux/saga/saga";
import signUpWatcherSaga from "pages/register/redux/saga/saga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([loginWatcherSaga(), signUpWatcherSaga(), homeWatcherSaga(), productsWatcherSaga(), cartWatcherSaga()]);
}
