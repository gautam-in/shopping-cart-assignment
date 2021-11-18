import { FETCH_BANNER_REQUEST ,FETCH_BANNER_SUCCESS ,FETCH_BANNER_FAILURE } from "./bannerType";

const initialState = {
    loading:false,
    banner:[],
    error:''
}

const bannerReducer = (state= initialState, action) =>{
    switch(action.type){
        case FETCH_BANNER_REQUEST: return {
            ...state,
            loading: true
        }
        case FETCH_BANNER_SUCCESS: return {
            ...state,
            banner: action.payload,
            loading:false

        }
        case FETCH_BANNER_FAILURE: return {
            ...state,
            error:action.payload,
            loading:false
        }

        default: return state;
    }

}

export default bannerReducer