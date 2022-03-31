import { STORE_ALL_CATEGORIES } from "../constants";

const categoriesReducer = (initialState = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case STORE_ALL_CATEGORIES:
      return [...payload];

    default:
      return initialState;
  }
};

export default categoriesReducer;
