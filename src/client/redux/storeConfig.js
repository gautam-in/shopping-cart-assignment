import thunk from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';

import rootReducer from './reducers';
import axiosConfig from '../utils/axiosConfig';

const composer = process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })
  : compose;

const middlewares = [thunk.withExtraArgument(axiosConfig)];
const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer];
const composedEnhancers = composer(...enhancers);

export default (preloadedState) => createStore(rootReducer, preloadedState, composedEnhancers);
