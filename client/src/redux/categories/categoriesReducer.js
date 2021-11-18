import {  FETCH_CATEGORY_REQUEST ,FETCH_CATEGORY_SUCCESS ,FETCH_CATEGORY_FAILURE  } from "./categoriesType";

const initialState = {
    loading:false,
    categories:[],
    error:''
}

const categoriesReducer = (state= initialState, action) =>{
    
    switch(action.type){
        case FETCH_CATEGORY_REQUEST: return {
            ...state,
            loading: true
        }
        case FETCH_CATEGORY_SUCCESS: return {
            ...state,
            categories: action.payload,
            loading:false

        }
        case FETCH_CATEGORY_FAILURE: return {
            ...state,
            error:action.payload,
            loading:false
        }

        default: return state;
    }

}

export default categoriesReducer