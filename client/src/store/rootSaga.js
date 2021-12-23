import { all } from 'redux-saga/effects';
import { homeSagas } from '../pages/home/redux/sagas';
import { productsSagas } from '../pages/products/redux/sagas';

export default function* rootSaga() {
  yield all([
    homeSagas.getBannerWatcherSaga(),
    homeSagas.getCategoriesWatcherSaga(),
    productsSagas.getProductsWatcherSaga(),
    productsSagas.postCartItemWatcherSaga(),
  ]);
}
