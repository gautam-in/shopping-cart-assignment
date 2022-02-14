
import { takeLatest, put } from "redux-saga/effects";

import { service } from "../services/service";
import { getProductListFailureAction, getProductListSuccessAction, GET_PRODUCT_LIST } from "../reducers/products/action";

function* getProductList(action) {
    try {
        const response = yield service.get("/products");
        yield put(getProductListSuccessAction(response.data));
    } catch (error) {
        yield put(getProductListFailureAction());
    }
}

export function* watchProductListSaga() {
    yield takeLatest(GET_PRODUCT_LIST, getProductList);
}
