import { compose, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import { logger } from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root-reducer";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./root-saga";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const sagaMiddleware = createSagaMiddleware();

const isDevMode = process.env.NODE_ENV !== "production";

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [isDevMode && logger, sagaMiddleware, thunk].filter(
  Boolean
);

const conponseEnhancer =
  (isDevMode && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composeEnhancers = conponseEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composeEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
