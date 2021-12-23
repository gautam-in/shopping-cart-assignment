import { GET_CATEGORIES_ERROR, GET_CATEGORIES_LOADING, GET_CATEGORIES_SUCCESS } from '../actions/actionTypes';

const initialState = {
  categoriesData: [
    {
      name: '',
      key: '',
      description: '',
      enabled: true,
      order: 0,
      imageUrl: '',
      id: '',
    },
  ],
  error: { getCategories: null },
  loading: { getCategories: false },
};

export const getCategoriesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_CATEGORIES_LOADING:
      return {
        ...state,
        loading: { ...state.loading, getCategories: true },
        error: { ...state.error, getCategories: null },
      };
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categoriesData: action.payload,
        loading: { ...state.loading, getCategories: false },
      };
    case GET_CATEGORIES_ERROR:
      return {
        ...state,
        loading: { ...state.loading, getCategories: false },
        error: { ...state.error, getCategories: action.payload },
      };
    default:
      return state;
  }
};
