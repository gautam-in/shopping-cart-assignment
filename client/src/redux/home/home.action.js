import * as types from './home.types';

export function getCategories() {
    return {
        type: types.GET_CATEGORIES
    }
}

export function setCategories(categories) {
    return {
        type: types.SET_CATEGORIES,
        payload: categories
    }
}