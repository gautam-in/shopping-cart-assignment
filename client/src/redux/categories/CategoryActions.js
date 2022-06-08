import { UPDATE_CATEGORY } from "./CategoryActionTypes";

export const updateCategories = (categories) => {
  return {
    type: UPDATE_CATEGORY,
    payload: categories,
  };
};
