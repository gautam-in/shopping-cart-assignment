import { BannerActionTypes } from "../constants/bannerAction_types";
const initialState = {
    bannerDetails: []
}
export const BannerReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case BannerActionTypes.GET_BANNER_DETAILS:
            return { ...state, bannerDetails: [...payload] }
        default:
            return state;
    }
}