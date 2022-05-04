import {createStore } from 'redux'
import CombineReducers from './CombineReducers'

const reduxStore = createStore(CombineReducers)

export default reduxStore