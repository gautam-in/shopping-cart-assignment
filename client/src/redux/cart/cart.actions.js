import { toast } from "react-toastify";
import CartActionTypes from "./cart.types";
import ApiRequestService from "../../services/api.service";

export const addItem = (payload) => async (dispatch) => {
  try {
    await ApiRequestService.postApi(
      "addToCart",
      {
        product: payload.id,
      },
      {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      }
    );
    dispatch({
      type: CartActionTypes.ADD_ITEM,
      payload,
    });
  } catch (error) {
    toast.error(error.message);
  }
};

export const removeItem = (payload) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload,
});

export const clearCart = (payload) => ({
  type: CartActionTypes.CLEAR_CART,
  payload,
});
