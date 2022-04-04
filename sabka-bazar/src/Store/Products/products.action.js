export const PRODUCT_LIST = "PRODUCT_LIST";
export const PRODUCT_LIST_SUCCESS = "PRODUCT_LIST_SUCCESS";
export const PRODUCT_LIST_FAILURE = "PRODUCT_LIST_FAILURE";

export function fetchProductsSuccessAction(data) {
  return {
    type: PRODUCT_LIST_SUCCESS,
    payload: data,
  };
}

export function fetchProductsFailureAction() {
  return {
    type: PRODUCT_LIST_FAILURE,
  };
}

export function fetchProductsAction() {
  return {
    type: PRODUCT_LIST,
  };
}
