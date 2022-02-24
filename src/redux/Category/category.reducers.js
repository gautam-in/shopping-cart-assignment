import CategoryActionTypes from "./category.types";

const INITIAL_STATE={
    categoryData : [],
    loading : false,
    errorMessage: null
};

const categoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case CategoryActionTypes.Fetch_CATEGORY_LIST:
        return {
          ...state,
          loading: true,
        };
      case CategoryActionTypes.Fetch_CATEGORY_LIST_SUCCESS:
        return {
          ...state,
          loading: false,
          categoryData: action.payload,
        };
      case CategoryActionTypes.Fetch_CATEGORY_LIST_FAILURE:
        return {
          ...state,
          loading: false,
          errorMessage: action.payload
        };
      default:
        return state;
    }
  };

export default categoryReducer;