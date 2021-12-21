import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import { productsActions } from "../actions";
import { GET_PRODUCTS_LOADING } from "../actions/actionTypes";

function* getProductsWorkerSaga() {
  try {
    const response = yield axios.get("http://localhost:5000/products");
    yield put(productsActions.getProductsAction.getProductsSuccess(response.data));
  } catch (error) {
    yield put(productsActions.getProductsAction.getProductsError(error));
  }
}

export function* getProductsWatcherSaga() {
  yield takeLatest(GET_PRODUCTS_LOADING, getProductsWorkerSaga);
}
