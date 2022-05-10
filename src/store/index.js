import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducer';
import rootSaga from './saga';
import { enableReduxPersist } from '../utils/constants';

const reducer = enableReduxPersist ? persistReducer({
    key: 'shoppingCart',
    storage
}, rootReducer) : rootReducer;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const ReduxPersistProvider = ({ children }) => {
    return (
        <>
            {enableReduxPersist ? (
                <PersistGate loading={null} persistor={persistStore(store)}>
                    {children}
                </PersistGate>
            ) : (
                <>
                    {children}
                </>
            )}
        </>
    )
};

export {
    store,
    ReduxPersistProvider
};