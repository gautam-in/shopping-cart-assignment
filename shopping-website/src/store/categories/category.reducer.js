import { CATEGORY_ACTION_TYPES } from "./category.types";

const CATEGORY_INITIAL_STATE = {
    categoryItems: [],
    isCategoryLoading: true,
    selectedCategory: "All"
};

export const categoryReducer = (state = CATEGORY_INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case CATEGORY_ACTION_TYPES.SET_CATEGORY_DATA:
            return {...state, categoryItems: payload, isCategoryLoading: false}
        case CATEGORY_ACTION_TYPES.SET_SELECTED_CATEGORY:
            return {...state, selectedCategory: payload}
        default:
            return state;
    }
}