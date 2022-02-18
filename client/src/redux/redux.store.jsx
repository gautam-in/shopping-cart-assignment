import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'

import rootReducers from './redux.rootReducers';
import rootSaga from './redux.saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducers,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)

export default store;