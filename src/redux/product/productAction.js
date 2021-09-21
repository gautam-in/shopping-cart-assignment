import { SELECTED_CATEGORY_ID } from "./productTypes";

export const setSelectedCategory = (id) => {
  return {
    type: SELECTED_CATEGORY_ID,
    payload: id,
  };
};
