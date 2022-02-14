import { takeLatest, put } from "redux-saga/effects";

import { service } from "../services/service";
import {
    GET_BANNERS,
    getBannersSuccessAction,
    getBannersFailureAction,
} from "../reducers/banners/action";

function* getBanners(action) {
    try {
        const response = yield service.get("/banners/");
        yield put(getBannersSuccessAction(response.data));
    } catch (error) {
        yield put(getBannersFailureAction());
    }
}

export function* watchBannersSaga() {
    yield takeLatest(GET_BANNERS, getBanners);
}
