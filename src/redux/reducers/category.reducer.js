import { categoryConstants } from "../actions/constants";

const initialState = {
    categories: [],
    loading: false,
    error: null,
  };

  const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
      case categoryConstants.GET_ALL_CATEGORIES_SUCCESS:
        state = {
          ...state,
          categories: action.payload.categories,
        };
        break;
  
      default:
        return state;
    }
    return state;
  };
  
  export default categoryReducer;