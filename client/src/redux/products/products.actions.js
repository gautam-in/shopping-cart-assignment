import ProductsActionTypes from "./products.types";
import ApiRequestService from "../../services/api.service";
import { loaderEnd, loaderStart } from "../loader/loader.actions";

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(loaderStart());
    const res = await ApiRequestService.getApi("products");
    dispatch({
      type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS,
      payload: res.data,
    });
    dispatch(loaderEnd());
  } catch (error) {
    dispatch(loaderEnd());
    dispatch({
      type: ProductsActionTypes.FETCH_PRODUCTS_FAILURE,
      payload: error.message,
    });
  }
};
