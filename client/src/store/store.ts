import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import config from "config/validateEnv";
import combineReducers from "store/combineReducers";
import rootSaga from "store/saga";

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const sagaMiddleware = createSagaMiddleware();

export const store = () => {
  let store =
    config.NODE_ENV === "development" && window.__REDUX_DEVTOOLS_EXTENSION__
      ? createStore(combineReducers, compose(applyMiddleware(sagaMiddleware), reduxDevTools))
      : createStore(combineReducers, compose(applyMiddleware(sagaMiddleware)));
  // let store = createStore(combineReducers, compose(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(rootSaga);
  return store;
};

export default store;
