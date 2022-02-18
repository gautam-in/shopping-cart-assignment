import { takeLatest, put } from "redux-saga/effects";

import { service } from "../services/service";
import {
    GET_CATEGORY_LIST,
    getCategoriesSuccessAction,
    getCategoriesFailureAction
} from "../actions/categoryAction";

function* getCategories(action) {
    try {
        const response = yield service.get("/categories");
        yield put(getCategoriesSuccessAction(response.data));
    } catch (error) {
        yield put(getCategoriesFailureAction());
    }
}

export function* watchCategoriesSaga() {
    yield takeLatest(GET_CATEGORY_LIST, getCategories);
}