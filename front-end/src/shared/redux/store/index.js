import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from '../reducers/rootReducers';
import { rootSaga } from '../saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();


const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['home','productsData','user']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [sagaMiddleware],
    // enhancers: [composeEnhancer]
  });


sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);