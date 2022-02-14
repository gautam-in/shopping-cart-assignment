import {
    GET_CATEGORY_LIST,
    GET_CATEGORY_LIST_SUCCESS,
    GET_CATEGORY_LIST_FAILURE,
} from "./action";


const initialState = {
    categories: [],
    loading: false,
};

function categoryListReducer(state = initialState, action) {

    switch (action.type) {
        case GET_CATEGORY_LIST:
            return { ...state, loading: true };
        case GET_CATEGORY_LIST_SUCCESS:
            let categories = action.payload;
            categories.sort((a, b) => a.order - b.order );
            return {
                ...state,
                categories: categories,
                loading: false,
            };
        case GET_CATEGORY_LIST_FAILURE:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}

export default categoryListReducer;