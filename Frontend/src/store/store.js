import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import rootSaga from '../sagas/rootSaga';
import {fetchUserDataSuccess} from '../actions';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger)),
);
if (localStorage.getItem('sabkaBazar')) {
  store.dispatch(
    fetchUserDataSuccess(JSON.parse(localStorage.getItem('sabkaBazar'))),
  );
}

sagaMiddleware.run(rootSaga);

export default store;
