import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './rootreducer'

const middleware = [thunk,logger]
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store;