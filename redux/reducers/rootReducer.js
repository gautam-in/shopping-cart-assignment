import {combineReducers} from  'redux';
import { reducer as formReducer } from 'redux-form'
import cart from "./cart"
import user from "./user"

const rootReducer = combineReducers({
    cart:cart,
    user:user,
    form:formReducer
})

export default rootReducer;