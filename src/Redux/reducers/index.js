import { combineReducers } from 'redux'
import countReducer from './countReducer'
import cartReducer from './cartReducer'

const rootReducer = combineReducers({
    countReducer,
    cartReducer
})

export default rootReducer