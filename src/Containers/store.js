import reducer from "./reducer"
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import saga from './sagas';

const sagaMiddleWare = createSagaMiddleware();
const store = configureStore({
    reducer: reducer,
    middleware: () => [sagaMiddleWare]
});

sagaMiddleWare.run(saga);

export default store;


