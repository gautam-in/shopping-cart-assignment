import { actionTypes } from "../Action";
// const CATEGORIES_INITIAL_STATE = {
//     categories: [],
// };
const getCategoriesReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_CATEGORIES:
      return action.payload;
      // return { ...state, categories: action.payload };
    default:
      return state;
  }
};

export default getCategoriesReducer;
