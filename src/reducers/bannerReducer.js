import {  GET_BANNERS } from "../actions/action-types";

const initialState = {
    banners: []
}

export const banners = (state = initialState, action) => {
    switch (action.type) {
        case GET_BANNERS:
            return { ...state, banners: action.payload };
        default:
            return state
    }
}