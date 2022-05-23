import { createStore, applyMiddleware, compose } from "redux";
import { reducers } from "./reducers";
import thunk from 'redux-thunk'
const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers,composeEnhancer(applyMiddleware(thunk)))