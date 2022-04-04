import {
  CATEGORY_LIST,
  CATEGORY_LIST_SUCCESS,
  CATEGORY_LIST_FAILURE,
} from "./category.action";

const initialState = {
  allCategories: [],
};

export default function categories(state = initialState, action) {
  switch (action.type) {
    case CATEGORY_LIST:
      return { ...state };
    case CATEGORY_LIST_SUCCESS:
      let allCategories = action.payload;
      allCategories = allCategories
        .filter((data) => data.enabled)
        .sort((a, b) => a.order - b.order);
      return {
        ...state,
        allCategories,
      };
    case CATEGORY_LIST_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
}
