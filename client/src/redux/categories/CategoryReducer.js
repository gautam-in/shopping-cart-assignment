import { UPDATE_CATEGORY } from "./CategoryActionTypes";

const categories = {
  data: [],
};

const categoryReducer = (state = categories, action) => {
  switch (action.type) {
    case UPDATE_CATEGORY:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    default:
      return state;
  }
};

export default categoryReducer;
