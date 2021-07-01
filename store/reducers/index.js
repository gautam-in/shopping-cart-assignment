import shoppingReducer from './shoppingReducer';
import {reducer as formReducer} from 'redux-form';
import { combineReducers } from 'redux';
import userReducer from './userReducer';

export default combineReducers({
    categories: shoppingReducer,
    form:formReducer,
    user:userReducer
  })
  


 