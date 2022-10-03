import {combineReducers} from "redux"
import productReducer from "./reducer"

const rootReducer=combineReducers({
    cartData:productReducer
})
export default rootReducer