import homeSaga from "../pages/home/store/saga";
import { all } from "redux-saga/effects";
export default function* rootSaga() {
  yield all([homeSaga()]);
}
