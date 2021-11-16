import axios from "axios";
export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';
export const CHOOSE_CATEGORY = 'CHOOSE_CATEGORY';

export const loadCategories = () => {
    return async (dispatch) => {
        let response = await axios.get('http://localhost:5000/categories');
        dispatch({type:LOAD_CATEGORIES,data:response.data});
    }
}

export const chooseCategory = (categoryId,categoryName) => {
    return async (dispatch)=>{
        dispatch({type:CHOOSE_CATEGORY,id:categoryId,name:categoryName});
    }
}
