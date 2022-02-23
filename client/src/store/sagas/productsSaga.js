import { takeLatest, put } from "redux-saga/effects";

import { service } from "../services/service";
import { getProductsFailureAction, getProductsSuccessAction, GET_PRODUCT_LIST } from "../actions/productsAction";

function* getProducts(action) {
    try {
        const response = yield service.get("/products");
        yield put(getProductsSuccessAction(response.data));
    } catch (error) {
        yield put(getProductsFailureAction());
    }
}

export function* watchProductsSaga() {
    yield takeLatest(GET_PRODUCT_LIST, getProducts);
}