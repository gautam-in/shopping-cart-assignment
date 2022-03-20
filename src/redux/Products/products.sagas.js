import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import ProductsActionTypes from "./products.types";
import {
  fetchProductsDataFailure,
  fetchProductsDataSuccess,
} from "./products.actions";

function* getProductList() {
  try {
    const response = yield axios
      .get("http://localhost:5000/products")
      .then((response) => Promise.resolve(response));
    yield put(fetchProductsDataSuccess(response.data));
  } catch (error) {
    yield put(fetchProductsDataFailure());
  }
}

export function* fetchProductData() {
  yield takeLatest(ProductsActionTypes.Fetch_PRODUCTS_LIST, getProductList);
}
