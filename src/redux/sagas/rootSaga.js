import { all, call } from 'redux-saga/effects';

import { bannersSaga } from './bannersSaga';
import { cartSaga } from './cartSaga';
import { categoriesSaga } from './categoriesSaga';
import { productSaga } from './productSaga';

function* rootSaga() {
  yield all([call(bannersSaga), call(cartSaga), call(categoriesSaga), call(productSaga)]);
}

export default rootSaga;
