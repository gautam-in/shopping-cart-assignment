import shoppingReducer from './shoppingReducer';
import {reducer as formReducer} from 'redux-form';
import { combineReducers } from 'redux';
import userReducer from './userReducer';
import cartReducer from './cartReducer';

export default combineReducers({
    categories: shoppingReducer,
    cart:cartReducer,
    form:formReducer,
    user:userReducer
  })
  


 