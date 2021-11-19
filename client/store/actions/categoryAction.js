import axios from "axios"

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
        axios.get('http://localhost:5000/categories', { headers: {'Content-Type':'application/json'}})
        .then(res => {
            dispatch(fetchAllCategories(res.data))
        })
        .catch(err => dispatch(fetchAllCategoriesError())) 
    }
}