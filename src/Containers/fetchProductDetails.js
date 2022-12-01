import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects'

function* fetchProductDetailsWorker() {
    try {
        const respData = yield axios.get("http://localhost:3000/server/products/index.get.json");
        const { status, data, statusText } = respData;
        if (status === 200) {
            yield put({
                type: "STOREPRODUCTDATA",
                data
            });
        } else {
            window.alert(statusText);
        }
    } catch (error) {
        window.alert(error);
    }
}

function* fetchProductDetailsWatcher() {
    yield takeLatest("GETPRODUCTDETAILS", fetchProductDetailsWorker)
}

export default fetchProductDetailsWatcher;