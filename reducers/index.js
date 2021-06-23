import { combineReducers } from "redux";
import shoppingReducer from "./shoppingReducer";
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    categories: shoppingReducer,
    form:formReducer
})