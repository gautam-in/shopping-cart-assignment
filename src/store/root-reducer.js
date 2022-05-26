import {combineReducers} from 'redux';
import { categoriesReducer } from './categories/category.reducer';
import { userReducer } from './user/user.reducer';

export const rootReducer = combineReducers({
    user: userReducer,
    category: categoriesReducer
})