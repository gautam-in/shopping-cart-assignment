import { GET_CATEGORY } from "./actionType";
let categoryState = {
  category: [],
};

const categoryReducer = (state = categoryState, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
