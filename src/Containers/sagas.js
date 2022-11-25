import {fork} from 'redux-saga/effects';
import fetchBannerDetailSaga from './fetchBannerDetails';
import fetchCategoriesSaga from './fetchCategories';
import fetchProductDetailsSaga from './fetchProductDetails';

export default function* rootsaga(){
    yield fork(fetchBannerDetailSaga)
    yield fork(fetchCategoriesSaga)
    yield fork(fetchProductDetailsSaga)
}