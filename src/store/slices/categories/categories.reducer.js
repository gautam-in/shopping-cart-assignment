import { CATEGORIES_ACTION } from "./categories.types";

const INITIAL_STATE = {
  categories: [],
  activeCategory: "all",
  isLoading: false,
  error: null,
};

export const categoriesReducer = (state = { INITIAL_STATE }, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION.SET_CATEGORIES_START:
      return { ...state, isLoading: true };

    case CATEGORIES_ACTION.SET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: payload,
        isLoading: false,
        activeCategory: "all",
      };

    case CATEGORIES_ACTION.SET_ACTIVE_CATEGORY:
      return { ...state, activeCategory: payload };

    case CATEGORIES_ACTION.SET_CATEGORIES_FAILED:
      return { ...state, error: payload, isLoading: false };

    default:
      return state;
  }
};
