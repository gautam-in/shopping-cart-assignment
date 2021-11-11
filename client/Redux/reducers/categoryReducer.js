import { GET_CATEGORIES } from "../actions/types";

const categoryState = {
  categoryList: [],
};

export const categoryReducer = (state = categoryState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return { ...state, categoryList: action.payload };
    default:
      return state;
  }
};
