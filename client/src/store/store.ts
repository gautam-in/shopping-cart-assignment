import { applyMiddleware, createStore, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import config from "config/validateEnv";
import rootSaga from "store/saga";
import rootReducer from "store/combineReducers";

const persistConfig = {
  key: "root",
  storage
};

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () => {
  let store =
    config.NODE_ENV === "development" && window.__REDUX_DEVTOOLS_EXTENSION__
      ? createStore(persistedReducer, compose(applyMiddleware(sagaMiddleware), reduxDevTools))
      : createStore(persistedReducer, compose(applyMiddleware(sagaMiddleware)));
  let persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return { store, persistor };
};
