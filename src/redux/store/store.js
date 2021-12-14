import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../root/root_reducer';
const middleware = [logger];
const store = createStore(rootReducer, applyMiddleware(...middleware));

export { store };