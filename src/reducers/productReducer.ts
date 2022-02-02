import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
} from "../constants";
import { IProducts } from "../typings/state/index";
import { actionTypes } from "@typings/action";

interface IAction {
  type: actionTypes;
  payload: IProducts;
}

const initState: IProducts = {
  isLoading: false,
  isLoaded: false,
  items: [],
  error: null,
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        items: [...action.payload],
      };
    case GET_PRODUCTS_FAIL:
      return {
        ...state,
        isLoaded: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
