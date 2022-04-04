import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const reduxSaga = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(reduxSaga));

reduxSaga.run(rootSaga);

export default store;
