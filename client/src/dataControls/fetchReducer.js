import { GET_BANNERS, GET_PRODUCTS, GET_CATEGORIES, IS_LOADING, GET_ERROR } from "./types";

export const initialState = {
  products: [],
  banners : [],
  categories : [],
  isLoading: false
}

export default function fetchReducer (state= initialState, action){
  switch(action.type){
    case GET_PRODUCTS :
      return{
        ...state,
        products : action.payload
      };

    case GET_BANNERS :
      return{
        ...state,
        banners: action.payload
      };
    
    case GET_CATEGORIES :
      return{
        ...state,
        categories: action.payload
      };
    
    case IS_LOADING :
      return{
        ...state,
        loading: action.payload,
      }
    
    case GET_ERROR :
      return action.payload;

    default:
      return state;
  }
} 