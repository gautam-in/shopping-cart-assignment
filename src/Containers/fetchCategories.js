import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* fetchCategoriesWorker(){
    try {
        const respData = yield axios.get("http://localhost:3000/server/categories/index.get.json");
        console.log(respData, 'respData');
        const { status, data } = respData;
        if(status === 200){
            yield put({type:"STORECATEGORIES", data});
        }
    } catch (error) {
        window.alert(error)
    }

}

function* fetchCategoriesWatcher(){
    yield takeLatest("GETCATEGORIES", fetchCategoriesWorker)
}

export default fetchCategoriesWatcher;