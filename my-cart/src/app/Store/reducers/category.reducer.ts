import { Category } from "../../models/category.model";
import * as productActionTypes from '../actions/cart.actions.types';

const initialState: { categories: Category[] } = {
    categories: []
}

export function categoryReducer(state = initialState, action: { type: string, payload?: any }) {
    switch (action.type) {
        case productActionTypes.ADD_CATEGORIES:
            return { ...state, categories: action.payload }
        default:
            return state
    }
}