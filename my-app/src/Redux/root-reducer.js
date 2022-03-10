import CartReducer from "./Cart-Reducer";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage"
import { combineReducers } from "redux";

const persistConfig ={
    key : "root",
    storage,
    whitelist:["cart"]
}

const rootReducer=combineReducers({
    cart:CartReducer
})

export default persistReducer(persistConfig,rootReducer)