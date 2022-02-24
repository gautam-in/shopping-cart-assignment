import CategoryActionTypes from "./category.types";

export function fetchCategoryDataSuccess(categoryData) {
    return {
        type: CategoryActionTypes.Fetch_CATEGORY_LIST_SUCCESS,
        payload: categoryData
    };
}

export const fetchCategoryDataFailure = (errorMessage) =>({
    
        type: CategoryActionTypes.Fetch_CATEGORY_LIST_FAILURE,
        payload: errorMessage
    }
)

export function fetchCategoryData() {
    return {
        type: CategoryActionTypes.Fetch_CATEGORY_LIST
    }
}