const INITIAL_STATE = {
    product_list:[],
    selectedCategoryData:[],
    selectedCategoryId: '',
    loading: false,
}

export const PRODUCTREDUCER = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "SET_PRODUCT_LIST":
            return {
                ...state,
                product_list: action.payload,
                selectedCategoryData:action.payload
            }
        case "SET_LOADING":
            return {
                ...state,
                loading: action.payload,
            }
        case "SET_SELECTED_CATEGORY":
            const selected_product_list = state.product_list.filter(item => item.category === action.payload);
            return {
                ...state,
                selectedCategoryId: action.payload,
                selectedCategoryData: selected_product_list,
            }
        default:
            return state;
    }
}