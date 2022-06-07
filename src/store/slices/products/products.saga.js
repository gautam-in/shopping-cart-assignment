import { all, put, call, takeLatest } from "redux-saga/effects";
import { getProducts } from "../../../utils/api.data";
import { fetchProdductFailed, fetchProdductSuccess } from "./products.action";
import { PRODUCT_ACTIONS } from "./products.types";

export function* fetchProducts() {
  try {
    const productsList = yield call(getProducts);
    yield put(fetchProdductSuccess(productsList));
  } catch (error) {
    yield put(fetchProdductFailed(error));
  }
}

export function* onFetchProducStart() {
  yield takeLatest(PRODUCT_ACTIONS.FETCH_PRODUCT_START, fetchProducts);
}

export function* productsSaga() {
  yield all([call(onFetchProducStart)]);
}
