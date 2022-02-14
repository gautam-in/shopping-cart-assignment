
import { takeLatest, put } from "redux-saga/effects";

import { service } from "../services/service";
import {
    GET_CATEGORY_LIST,
    getCategoryListSuccessAction,
    getCategoryListFailureAction
} from "../reducers/category/action";

function* getCategoryList(action) {
    try {
        const response = yield service.get("/categories");
        yield put(getCategoryListSuccessAction(response.data));
    } catch (error) {
        yield put(getCategoryListFailureAction());
    }
}

export function* watchCategoryListSaga() {
    yield takeLatest(GET_CATEGORY_LIST, getCategoryList);
}
