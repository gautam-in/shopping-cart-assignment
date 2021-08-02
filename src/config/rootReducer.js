import { combineReducers } from 'redux'
import { appReducer } from '../common/app.reducer'
import { cartReducer } from '../components/Cart/Cart.reducer'
const rootReducer = combineReducers({
    app: appReducer,
    cart: cartReducer
})

export default rootReducer;