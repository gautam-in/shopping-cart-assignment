import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean);

const persistConfig = {
    key: "root",
    storage,
    whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose ;
const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);
