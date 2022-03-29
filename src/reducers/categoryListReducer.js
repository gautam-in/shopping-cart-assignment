const initialState = [];

const categoryListReducer = (state = initialState, action) => {
  if (action.type === "FETCH_CATEGORY_LIST") {
    return [...action.payload.categoryList];
  }
  return [...state];
};

export default categoryListReducer;
