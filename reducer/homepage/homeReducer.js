import * as types  from "../../constants/actionTypes";

const initialState ={
    banners:[],
    categories:[],
}
 const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_BANNERS: 
            return {
                ...state,
                banners: action.payload
            }
        case types.GET_CATEGORIES: 
        return {
            ...state,
            categories: action.payload
        }
        default:
            return state
    }
};
export default homeReducer
