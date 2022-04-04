export const CATEGORY_LIST = "CATGEORY_LIST";
export const CATEGORY_LIST_SUCCESS = "CATEGORY_LIST_SUCCESS";
export const CATEGORY_LIST_FAILURE = "CATEGORY_LIST_FAILURE";

export function fetchCategoriesSuccessAction(data) {
  return {
    type: CATEGORY_LIST_SUCCESS,
    payload: data,
  };
}

export function fetchCategoriesFailureAction() {
  return {
    type: CATEGORY_LIST_FAILURE,
  };
}

export function fetchCategoriesAction() {
  return {
    type: CATEGORY_LIST,
  };
}
