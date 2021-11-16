import {CHOOSE_CATEGORY, LOAD_CATEGORIES} from '../actions/categoryAction';
import { RESET_CATEGORY } from '../actions/productAction';

const intialState = {
    categories:[],
    category:'All',
    categoryId:'',
    selectedCategory:false
};

export default (state = intialState,action) => {
    switch(action.type){
        case LOAD_CATEGORIES:
            return{
                ...state,
                categories:action.data
            }
        case CHOOSE_CATEGORY:
            return{
                ...state,
                category:action.name,
                categoryId:action.id,
                selectedCategory:true
            }
        case RESET_CATEGORY:
            return{
                ...state,
                category:'All',
                categoryId:'',
                selectedCategory:false
            }
    }
    return state
}