import { PRODUCT_ACTIONS } from "./products.types";
import { createAction } from "../../../utils/reducer/reducer.util";
import { getProducts } from "../../../utils/api.data";

// type: PRODUCT_ACTIONS.FETCH_PRODUCT_START, "payload": payload

export const fetchProdductStart = () =>
  createAction(PRODUCT_ACTIONS.FETCH_PRODUCT_START);

export const fetchProdductSuccess = (productsArray) =>
  createAction(PRODUCT_ACTIONS.FETCH_PRODUCT_SUCCESS, productsArray);

export const fetchProdductFailed = (error) =>
  createAction(PRODUCT_ACTIONS.FETCH_PRODUCT_FAILED, error);

// export const fetchProductsAsync = async (dispatch) => {
//   dispatch(fetchProdductStart());
//   try {
//     const productsList = await getProducts();
//     dispatch(fetchProdductSuccess(productsList));
//   } catch (error) {
//     dispatch(fetchProdductFailed(error));
//   }
// };
