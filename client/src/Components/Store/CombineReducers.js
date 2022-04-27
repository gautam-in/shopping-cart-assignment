import {combineReducers} from 'redux'
import CartReducer from './Reducers/CartReducer'
import userReducer from './Reducers/UserReducer'

const CombineReducers = combineReducers({CartReducer: CartReducer, user:userReducer})

export default CombineReducers