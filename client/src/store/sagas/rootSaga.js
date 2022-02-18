import { all } from 'redux-saga/effects';
import { watchBannersSaga } from './bannersSaga';
import { watchCartSaga, watchCartRemoveSaga } from './cartSaga'
import { watchCategoriesSaga } from "./catgeoriesSaga";
import { watchProductsSaga } from "./productsSaga";


export default function* rootSaga() {
    yield all([
        watchBannersSaga(),
        watchCategoriesSaga(),
        watchProductsSaga(),
        watchCartSaga(),
        watchCartRemoveSaga()
    ])
}