let initialState = {
  allProducts: [],
  fetchError: false,
  fetchErrorMessage: null,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_ALL_PRODUCTS":
      return { ...state, allProducts: [...action.payload.products] };
    case "FETCH_ALL_PRODUCTS_ERROR": 
      return { ...state, fetchError : true, fetchErrorMessage : 'Something went wrong while fetching Products'}
    default:
      return state;
  }
}
