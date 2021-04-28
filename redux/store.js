import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { createWrapper } from 'next-redux-wrapper'
import reducers from './reducers';
const middleware = [thunk];

const makeStore = () => createStore(reducers, compose(applyMiddleware(...middleware))) 

export const wrapper = createWrapper(makeStore)