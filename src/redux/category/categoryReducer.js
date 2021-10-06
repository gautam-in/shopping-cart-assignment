import { SELECTED_CATEGORY_ID } from "./categoryTypes";

const intialState = {
  categoryId: "",
};

const categoryReducer = (state = intialState, action) => {
  switch (action.type) {
    case SELECTED_CATEGORY_ID:
      return {
        categoryId: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
