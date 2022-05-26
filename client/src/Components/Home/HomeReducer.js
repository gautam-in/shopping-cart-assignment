const INITIAL_STATE = {
    banner_data: [],
    categories_data: [],
    loading: false,
};

export const HOMEREDUCER = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "SET_BANNER":
            return {
                ...state,
                banner_data: action.payload,
            }
        case "SET_LOADING":
            return {
                ...state,
                loading: action.payload,
            }
        case "SET_CATEGORIES":
            return {
                ...state,
                categories_data: action.payload,
            }
        default:
            return state;
    }
}