import {createStore, applyMiddleware} from 'redux'
import rootReducer from './root_reducer'
import logger from 'redux-logger'


export const store = createStore(rootReducer,{}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;