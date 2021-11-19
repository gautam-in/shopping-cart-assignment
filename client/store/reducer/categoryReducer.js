let initialState = {
    allCategories: [],
    fetchError: false,
    fetchErrorMessage: null,
  };
  
  export default function categoryReducer(state = initialState, action) {
    switch (action.type) {
      case "FETCH_ALL_CATEGORY":
        return { ...state, allCategories: [...action.payload.categories] };
      case "FETCH_ALL_CATEGORY_ERROR": 
        return { ...state, fetchError : true, fetchErrorMessage : 'Something went wrong while fetching Categories'}
      default:
        return state;
    }
  }
  