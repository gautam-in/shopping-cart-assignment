import {legacy_createStore as createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducer';
import rootSaga from './saga';

const persistedReducer = persistReducer({
    key: 'shoppingCart',
    storage
}, rootReducer);
const sagaMiddleware = createSagaMiddleware();

const enhancers = compose(
    applyMiddleware(sagaMiddleware),
    composeWithDevTools()
);

const store = createStore(persistedReducer, enhancers);
const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export {
    store,
    persistor
};