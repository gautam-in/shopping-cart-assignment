import { all, fork } from 'redux-saga/effects';
import { rootActions } from './redux.rootActions';

export default function* sagas() {
    yield all([fork(rootActions)]);
}