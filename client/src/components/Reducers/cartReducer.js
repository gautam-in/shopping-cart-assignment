const initialState = {
    countOfItems: 0,
    isCartModalOpen: false,
    listOfProducts: {

    },
    productCategoryId:'',
    isSnackbar:false
}

const CartReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'PRODUCT_ADDED_IN_CART':
            const productCount = state.listOfProducts[action.payload.id] && state.listOfProducts[action.payload.id].count || 0;
            const productObj = {
                ...action.payload,
                count: productCount + 1
            }

            const formatedObj = { ...state.listOfProducts, [action.payload.id]: productObj };
            return {
                ...state,
                listOfProducts: formatedObj,
                countOfItems: state.countOfItems + 1
            }
        case 'OPEN_MODAL_FOR_CART':
            return {
                ...state,
                isCartModalOpen: true
            }
        case 'CLOSE_MODAL_FOR_CART': return {
            ...state,
            isCartModalOpen: false
        }
        case 'INCREMENT_PRODUCT_ITEMS':
            let newObj;
            Object.keys(state.listOfProducts).forEach((data) => {
                if (data === action.payload.id) {
                    newObj = { [data]: { ...state.listOfProducts[data], count: state.listOfProducts[data].count + 1 } };
                }
            })
            return {
                ...state,
                listOfProducts: { ...state.listOfProducts, ...newObj },
                countOfItems: state.countOfItems + 1
            }
        case 'DECREMENT_PRODUCT_ITEMS':
            let newDecObj;
            let cloneListOfProducts = { ...state.listOfProducts };
            Object.keys(cloneListOfProducts).forEach((data) => {
                if (data === action.payload.id) {
                    newDecObj = { [data]: { ...cloneListOfProducts[data], count: cloneListOfProducts[data].count - 1 } };
                }
            })
            if (newDecObj[action.payload.id].count === 0) {
                delete newDecObj[action.payload.id];
                delete cloneListOfProducts[action.payload.id];
            }
            return {
                ...state,
                listOfProducts: { ...cloneListOfProducts, ...newDecObj },
                countOfItems: state.countOfItems - 1
            }
            case 'EXPLORE_CATEGORY':return{
                ...state,
                productCategoryId:action.payload
            }
            case 'RESET_CATEGORY_ID':return{
                ...state,
                productCategoryId:'' 
            }
            case 'OPEN_SNACKBAR':return{
                ...state,
                isSnackbar:true
            }
            case 'CLOSE_SNACKBAR':return{
                ...state,
                isSnackbar:false
            }
        default: return state;
    }

}
export default CartReducers;