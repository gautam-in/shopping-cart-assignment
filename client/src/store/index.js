import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import createSagaMiddleWear from "redux-saga"
import rootSaga from "./sagas/rootSaga";


const sagaMiddleWear = createSagaMiddleWear();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleWear))

sagaMiddleWear.run(rootSaga);

export default store;