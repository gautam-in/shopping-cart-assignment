import actions from '../actions/index';
const initialState = {
    productData:[],
    searching_productdetails:false,
    searching_productdetails_success:false,
    searching_productdetails_failure: false,
    error: null,
    addCartData: null,
    adding_to_cart: false,
    adding_to_cart_success: false,
    adding_to_cart_failure: false,
    cartItems:[]
}

export default function productReducer(state = initialState, action){
    switch(action.type){
        case actions.GET_PRODUCT_DETAILS:{
            const tempObj = {
                searching_productdetails:true,
                searching_productdetails_success:false,
                searching_productdetails_failure: false, 
            }
            return {...state,...tempObj}
        }
        case actions.GET_PRODUCT_DETAILS_SUCCESS:{
            const tempObj = {
                productData:action.data,
                searching_productdetails:false,
                searching_productdetails_success:true,
                searching_productdetails_failure: false, 
            }
            return {...state,...tempObj}
        }
        case actions.GET_PRODUCT_DETAILS_FAILURE:{
            const tempObj = {
                searching_productdetails:false,
                searching_productdetails_success:false,
                searching_productdetails_failure: true, 
                error: action.errorMsg
            }
            return {...state,...tempObj}
        }
        case actions.CART_PROCESS_RESET: {
            const tempObj={
                adding_to_cart: false,
                adding_to_cart_success: false,
                adding_to_cart_failure: false
            }
            return {...state,...tempObj}
        }
        case actions.POST_CART_DATA:{
            const tempObj={
                adding_to_cart: true,
                adding_to_cart_success: false,
                adding_to_cart_failure: false
            }
            return {...state,...tempObj}
        }
        case actions.POST_CART_DATA_SUCCESS:{
            const cartInfo = state.cartItems ? state.cartItems : [];
            if(action.data.item){
                action.data.item.qty=1;
                cartInfo.push(JSON.parse(JSON.stringify(action.data.item)));
            }
            const tempObj={
                adding_to_cart: false,
                adding_to_cart_success: true,
                adding_to_cart_failure: false,
                addCartData: action.data,
                cartItems: cartInfo
            }
            return {...state,...tempObj}
        }
        case actions.POST_CART_DATA_FAILURE:{
            const tempObj={
                adding_to_cart: false,
                adding_to_cart_success: false,
                adding_to_cart_failure: true,
                error: action.errorMsg
            }
            return {...state,...tempObj}
        }
        case actions.RESET_CART_DATA:{
            const tempObj={
                cartItems:[]
            }
            return {...state,...tempObj}
        }
        default:
            return state;
    }
}