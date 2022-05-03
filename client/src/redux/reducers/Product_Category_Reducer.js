import { CategoryActionTypes } from "../constants/categoryAction_types";
const initialState = {
    categories: []
}
export const CategoriesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CategoryActionTypes.GET_PRODUCT_CATEGORIES:
            const filterCategories= payload.filter(item=>item.order>0).sort((a,b)=>a.order-b.order)
            return { ...state, categories: [...filterCategories] }
        default:
            return state;
    }
}