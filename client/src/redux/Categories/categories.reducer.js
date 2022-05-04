import * as categoryActions from "./categories.action";

let initialState = {
  categories: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case categoryActions.GET_ALL_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};
