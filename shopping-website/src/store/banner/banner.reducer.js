import { BANNER_ACTION_TYPES } from "./banner.types";

const BANNER_INITIAL_STATE = {
    bannerItems: [],
    isBannerLoading: true
};

export const bannerReducer = (state = BANNER_INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case BANNER_ACTION_TYPES.SET_BANNER_DATA:
            return {...state, bannerItems: payload, isBannerLoading: false}
        default:
            return state;
    }
}