export const productReducer = (state, action) => {
    switch(action.type){
        case "GET_PRODUCTS_DATA": {
            return {...state, productsData: action.payload, serverData: action.payload } 
        }
        case "SET_PRODUCTS_DATA" : {
            return {...state, productsData: action.payload }
        }
        case "SET_CATEGORY_DATA" : {
            return {...state, categoryData: action.payload }
        }
        case "SET_CATEGORY_VALUE" : {
            return {...state, categoryValue: action.payload}
        }
        case "ADD_TO_CART" : {
            return {...state, cartData: action.payload}
        }
        case "INCREMENT_CART_QTY" : {
            return {...state, cartData: action.payload}
        }
        case "DECREMENT_CART_QTY" : {
            return {...state, cartData: action.payload}
        }
        case "SET_CART_VIEW" : {
            return {...state, closeCartModel: action.payload}
        }
        default : {
            return state
        }
    }
}