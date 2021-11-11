import { createStore } from 'redux';
import { combineReducers } from 'redux';
import reducer from './reducer';

const rootReducer = combineReducers({ store: reducer })

const Store = createStore(rootReducer);

export default Store