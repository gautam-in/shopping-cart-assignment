import { all, call } from 'redux-saga/effects';

import homeSagas from './Home/sagas';
import productsSagas from './Products/sagas';

export default function* rootSaga() {
  yield all([
    call(homeSagas),
    call(productsSagas)
  ]);
}