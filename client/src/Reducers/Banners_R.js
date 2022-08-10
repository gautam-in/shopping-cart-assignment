import { actionTypes } from "../Action";

const getBannersReducer = (banners = [], action) => {
    switch(action.type){
        case actionTypes.FETCH_BANNERS:
            return action.payload;
        default:
            return banners;
    }
}

export default getBannersReducer;