import { all, call } from 'redux-saga/effects';

import homeSagas from './Home/sagas';

export default function* rootSaga() {
  yield all([
    call(homeSagas)
  ]);
}