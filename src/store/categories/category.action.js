import { createAction } from "../../utils/reducer";
import { CATEGORY_ACTION_TYPES } from "./category.action.types";

export const setCategories = (categories) => createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES, categories);