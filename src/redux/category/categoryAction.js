import { SELECTED_CATEGORY_ID } from "./categoryTypes";

export const setSelectedCategory = (id) => {
  return {
    type: SELECTED_CATEGORY_ID,
    payload: id,
  };
};
