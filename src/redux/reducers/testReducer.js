import { ADD_QUANTITY, AUTH, BANNER, CLEAR_CART, GET_CATEGORY, GET_PRODUCT, MANAGE_CART, REMOVE_ITEM, REMOVE_QUANTITY, SHOW_MODAL, SHOW_TOAST, UPDATE_QUANTITY } from "../types";

const initialState = {
    bannerData: [],
    auth: '',
    categoryData: [],
    productData: [],
    cartData: [],
    modalFlag: false,
    toastFlag:false
}
export default (state = initialState, action) => {
    switch (action.type) {
        case AUTH:
            return {
                ...state,
                auth: action.payload
            }
        case BANNER:
            return {
                ...state,
                bannerData: action.payload
            }
        case GET_CATEGORY:
            const sortedCategories = action.payload?.sort((a, b) => a.name - b.name);
            console.log('check sorted data',sortedCategories)
            return {
                ...state,
                categoryData: action.payload?.sort((a, b) => a.name - b.name)
            }
        case GET_PRODUCT:
            return {
                ...state,
                productData: action.payload
            }
        case MANAGE_CART:
            return {
                ...state,
                cartData: [...state.cartData, action.payload]
            }
        case ADD_QUANTITY:
            return {
                ...state,
                cartData: state.cartData.map(ele => ele.id === action.payload.id ? { ...ele, quantity: ++ele.quantity } : ele)
            }
        case REMOVE_QUANTITY:
            return {
                ...state,
                cartData: state.cartData.map(ele => ele.id === action.payload.id ? { ...ele, quantity: --ele.quantity } : ele)
            }

        case UPDATE_QUANTITY:
            return {
                ...state,
                cartData: state.cartData.map(ele => ele.id === action.payload.id ? { ...ele, quantity: action.payload.quantity } : ele)
            }
        case REMOVE_ITEM:
            return {
                ...state,
                cartData: state.cartData.filter(ele => ele.id !== action.payload)
            }
        case SHOW_MODAL:
            return {
                ...state,
                modalFlag: action.payload
            }
        case CLEAR_CART:
            return {
                ...state,
                cartData: []
            }
        default:
            return state;
    }
}