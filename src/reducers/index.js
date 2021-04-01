import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import homeApis from './homeReducer';
import signinReducer from './signInReducer';
import signUpReducer from './signUpReducer';
import productReducer from './productReducer';
export default combineReducers({
    routing: routerReducer,
    homeApis,
    signinReducer,
    signUpReducer,
    productReducer
});