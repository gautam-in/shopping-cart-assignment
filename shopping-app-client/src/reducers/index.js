import { combineReducers } from 'redux';
import cart from './cartReducer'

const rootReducer = combineReducers({
    cart
});

export default rootReducer
