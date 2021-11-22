import { backendInstance } from "../../backend"

export const fetchCategoryWithId = (id) => {
    return {
        type : 'FETCH_CATEGORY_BY_ID',
        payload : {
            id
        }
    }
}

export const fetchAllCategories = (data) => {
    return {
        type : 'FETCH_ALL_CATEGORY',
        payload : {
            categories : data
        }
    }
}

export const fetchAllCategoriesError = () => {
    return {
        type : 'FETCH_ALL_CATEGORY_ERROR'
    }
}

export function asyncFetchCategories() {
    return dispatch => {
        backendInstance.get('/categories')
        .then(res => {
            dispatch(fetchAllCategories(res.data))
        })
        .catch(err => dispatch(fetchAllCategoriesError())) 
    }
}