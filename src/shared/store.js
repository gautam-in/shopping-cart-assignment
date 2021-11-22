import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { createStore, applyMiddleware } from 'redux';

// Note: this API requires redux@>=3.1.0
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;