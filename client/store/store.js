import { applyMiddleware, createStore, compose } from 'redux'
import { createWrapper } from 'next-redux-wrapper'

import { mainReducer } from './reducer/index';
import thunk from 'redux-thunk'

const middleware = [thunk]

const makeStore = () => createStore(mainReducer, compose(applyMiddleware(...middleware)))    

export const wrapper = createWrapper(makeStore);