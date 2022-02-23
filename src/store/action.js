export const UPDATE_CART_ITEM = "UPDATE_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const SET_FILTER = "SET_FILTER";

export const updateCart = (payload = null) => {
  return {
    type: UPDATE_CART_ITEM,
    payload: payload,
  };
};

export const removeCart = (payload = null) => {
  return {
    type: REMOVE_CART_ITEM,
    payload: payload,
  };
};

export const setFilter = (payload = null) => {
  return {
    type: SET_FILTER,
    payload: payload,
  };
};