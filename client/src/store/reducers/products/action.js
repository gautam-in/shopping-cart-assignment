export const GET_PRODUCT_LIST = "GET_PRODUCT_LIST";

export const GET_PRODUCT_LIST_SUCCESS = "GET_PRODUCT_LIST_SUCCESS";

export const GET_PRODUCT_LIST_FAILURE = "GET_PRODUCT_LIST_FAILURE";

export const GET_PRODUCT_LIST_BY_CATEGORY = "GET_PRODUCT_LIST_BY_CATEGORY"


export function getProductListSuccessAction(data) {
    return {
        type: GET_PRODUCT_LIST_SUCCESS,
        payload: data
    };
}

export function getProductListFailureAction(data) {
    return {
        type: GET_PRODUCT_LIST_FAILURE,
        payload: data
    };
}

export function getProductListAction() {
    return {
        type: GET_PRODUCT_LIST,
    }
}

export function getProductListByCategory(categoryId = null) {
    return {
        type: GET_PRODUCT_LIST_BY_CATEGORY,
        payload: categoryId
    }
}