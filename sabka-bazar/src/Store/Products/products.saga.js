import { put, takeLatest } from "redux-saga/effects";
import { fetchAPIData } from "../APIService";
import {
  fetchProductsFailureAction,
  fetchProductsSuccessAction,
  PRODUCT_LIST,
} from "./products.action";

function* fetchProducts() {
  try {
    const response = yield fetchAPIData("products");
    yield put(fetchProductsSuccessAction(response.data));
  } catch (err) {
    yield put(fetchProductsFailureAction());
  }
}

export function* productSaga() {
  yield takeLatest(PRODUCT_LIST, fetchProducts);
}
