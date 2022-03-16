import { createStore, applyMiddleware } from 'redux';
import { persistStore,persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import thunk from "redux-thunk";
import rootReducer from './root-reducer';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}
const persistConfig = {
  key: 'root',
  storage,
};
const pReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(pReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

