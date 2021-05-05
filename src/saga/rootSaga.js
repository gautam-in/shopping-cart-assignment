import { all } from 'redux-saga/effects';
import indexSaga from './indexSaga';

function* rootSaga() {
    yield all([
        indexSaga()
    ])
}
export default rootSaga;