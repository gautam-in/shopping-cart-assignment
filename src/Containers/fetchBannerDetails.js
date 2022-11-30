import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* fetchBannerDetailWorker(action) {
    try {
        const respData = yield axios.get("http://localhost:3000/server/banners/index.get.json");
        const { status, data } = respData;
        if (status === 200) {
            yield put({ type: 'STOREBANNERDATA', bannerData: data })
        }
    } catch (error) {
        window.alert(error);
    }
}

function* fetchBannerDetailWatcher(action) {
    yield takeLatest("GETDATA", fetchBannerDetailWorker)
}

export default fetchBannerDetailWatcher;