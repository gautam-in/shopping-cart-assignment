import { categoryActionTypes } from "./categoryActionTypes";

export const setItems = (items) => ({
   type: categoryActionTypes,
   payload : items
});