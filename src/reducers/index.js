import { combineReducers } from 'redux';
import { SET_BANNERS, SET_CATEGORIES } from '../actions/types';

const initialState = {
    categories: [],
    banners: [],
    products: [],
    cart: [],
    registerStatus: '',
    loginStatus: '',
    cartStatus: '',
    selectedCategory: {}
}

function setData(state = initialState, action) {
    switch (action.type) {
        case SET_BANNERS:
            return { ...state, banners: action.payload }
        case SET_CATEGORIES:
            return { ...state, categories: action.payload }
        default:
            return state
    }
}

export default combineReducers({ setData });