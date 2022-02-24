import {all,call} from 'redux-saga/effects';

import { fetchBannerData } from './Banners/banners.sagas';
import { fetchCategoryData } from './Category/category.sagas';
import { fetchProductData } from './Products/products.sagas';

export default function* rootSaga() {
    yield all([
        call(fetchBannerData), call(fetchCategoryData), call(fetchProductData)
    ])
}