import {createStore,applyMiddleware} from 'redux'
import  thunk from "redux-thunk"
import reducer from './Reducer';
const store= createStore(reducer,undefined,applyMiddleware(thunk));

export default store;