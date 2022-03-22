import LoaderActionTypes from "./loader.types";

const INITIAL_STATE = {
  isLoading: false,
};

const loaderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LoaderActionTypes.LOADER_START:
      return {
        ...state,
        isLoading: true,
      };
    case LoaderActionTypes.LOADER_END:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default loaderReducer;
