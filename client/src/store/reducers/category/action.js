export const GET_CATEGORY_LIST = "GET_CATGEORY_LIST";

export const GET_CATEGORY_LIST_SUCCESS = "GET_CATEGORY_LIST_SUCCESS";

export const GET_CATEGORY_LIST_FAILURE = "GET_CATEGORY_LIST_FAILURE";


export function getCategoryListSuccessAction(data) {
    return {
        type: GET_CATEGORY_LIST_SUCCESS,
        payload: data
    };
}

export function getCategoryListFailureAction(data) {
    return {
        type: GET_CATEGORY_LIST_FAILURE,
        payload: data
    };
}

export function getCategoryListAction(categoryId) {
    return {
        type: GET_CATEGORY_LIST, 
        payload: categoryId
    }
}