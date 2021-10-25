import { actions } from "../actionTypes/constants";

const initialState = {
    banners: []
}
export default function bannerReducer(state = initialState, action) {
    switch(action.type){
        case actions.FETCH_BANNERS:
            return {
                ...state, banners: action.payload
            }
        default: 
            return {...state};
    }
}