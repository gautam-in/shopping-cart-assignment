import { combineReducers } from "redux";
import shopReducer from './shopping/shopping-reducer';
import authReducer from './auth/auth-reducer';

const rootReducer = combineReducers({
    shop: shopReducer,
    auth: authReducer
});

export default rootReducer;