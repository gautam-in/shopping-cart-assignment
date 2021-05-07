import {  GET_CATEGORIES } from "../actions/action-types";

const initialState = {
    categories: []
}

export const categoriesLis = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            let filteredCategories = action.payload.sort(function(a, b){
                return a.order - b.order;
              }).filter(a => a.enabled === true);
              console.log(filteredCategories);
            return { ...state, categories: filteredCategories };
        default:
            return state
    }
}