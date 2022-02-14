import {
    GET_BANNERS,
    GET_BANNERS_SUCCESS,
    GET_BANNERS_FAILURE,
} from "./action";


const initialState = {
    banners: [],
    loading: false,
};

function bannersReducer(state = initialState, action) {

    switch (action.type) {
        case GET_BANNERS:
            return { ...state, loading: true };
        case GET_BANNERS_SUCCESS:
            return {
                ...state,
                banners: action.payload,
                loading: false,
            };
        case GET_BANNERS_FAILURE:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}

export default bannersReducer;