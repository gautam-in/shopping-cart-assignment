import axios from "axios";
import {  put, takeLatest } from "redux-saga/effects";
import { homeActions } from "../actions";
import { GET_CATEGORIES_LOADING } from "../actions/actionTypes";

function* getCategoriesWorkerSaga() {
  try {
    const response = yield axios.get("http://localhost:5000/categories");
    yield put(
      homeActions.getCategoriesAction.getCategoriesSuccess(response.data)
    );
  } catch (error) {
    yield put(homeActions.getCategoriesAction.getCategoriesError(error));
  }
}

export function* getCategoriesWatcherSaga() {
  yield takeLatest(GET_CATEGORIES_LOADING, getCategoriesWorkerSaga);
}
