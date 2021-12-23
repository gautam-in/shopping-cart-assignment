import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './combainReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import { createLogger } from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = () => {
  let storeConfig =
    process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__
      ? createStore(rootReducer, compose(applyMiddleware(sagaMiddleware, logger), reduxDevTools))
      : createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(rootSaga);
  return storeConfig;
};

export default store;
