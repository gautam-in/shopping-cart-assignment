import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension';

import rootSaga from './sagas';
import { homeReducer } from '../redux/home/home.reducer';
import { productReducer } from '../redux/products/products.reducer';
import { cartReducer } from '../redux/cart/cart.reducer';

const persistConfig = {
    key: 'root',
    storage: storage
}

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    home: homeReducer,
    product: productReducer,
    cart: cartReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export { store, persistor };
