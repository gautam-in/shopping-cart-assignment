import { all } from 'redux-saga/effects'
import { watchBannersSaga } from './bannersSaga'
import { watchCartSaga, watchCartRemoveSaga } from './cartSaga'
import { watchCategoryListSaga } from "./catgeoryListSaga"
import { watchProductListSaga } from './productListSaga'


export default function* rootSaga() {
    yield all([
        watchBannersSaga(),
        watchCategoryListSaga(),
        watchProductListSaga(),
        watchCartSaga(),
        watchCartRemoveSaga()
    ])
}