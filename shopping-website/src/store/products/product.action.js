import { createAction } from "../../utils/reducer/reducer.util";
import { PRODUCT_ACTION_TYPES } from "./product.type";

export const setProductData = (productData) => createAction(PRODUCT_ACTION_TYPES.SET_PRODUCT_DATA, productData);

