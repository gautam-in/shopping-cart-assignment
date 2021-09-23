import { ProductsList } from "models/products";
import { call, put, takeLatest } from "redux-saga/effects";
import { ProductsRepository } from "repositories/products/products";
import { ProductsActions } from "../actions/actions";
import { PRODUCTS } from "../actions/actionTypes";

function* getProductsWorkerSaga() {
  try {
    const response: ProductsList = yield call(ProductsRepository.getProducts);
    yield put(ProductsActions.getProductsSuccess(response));
  } catch (error) {
    yield put(ProductsActions.getProductsError(error));
  }
}

export default function* productsWatcherSaga() {
  yield takeLatest(PRODUCTS.GET.LOADING, getProductsWorkerSaga);
}
