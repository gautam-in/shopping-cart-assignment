const INITIAL_STATE = {
    cart_product:[],
    cart_open_model:false,
}

export const CARTREDUCER = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "ADD_PRODUCT_TO_CART":
            //add a count to the product
            let cart_product = [...state.cart_product];
            let product_index = cart_product.findIndex(product => product.id === action.payload.id);
            if(product_index !== -1) {
                cart_product[product_index].count += 1;
            }
            else {
                cart_product.push({...action.payload, count:1});

            }
                return {
                    ...state, 
                    cart_product
                }
            
        case "SHOW_CART_MODEL":
            return {
                ...state,
                cart_open_model: action.payload,
            }
        case "INCREASE_PRODUCT_QUANTITY":
            let cart_product_increase = [...state.cart_product];
            let product_index_increase = cart_product_increase.findIndex(product => product.id === action.payload.id);
            if(product_index_increase !== -1) {
                cart_product_increase[product_index_increase].count += 1;
            }
            console.log(cart_product_increase)
            return {
                ...state,
                cart_product: cart_product_increase
            }
        case "DECREASE_PRODUCT_QUANTITY":
            let cart_product_decrease = [...state.cart_product];
            let product_index_decrease = cart_product_decrease.findIndex(product => product.id === action.payload.id);  
            if(product_index_decrease !== -1 && cart_product_decrease[product_index_decrease].count > 0) {
                cart_product_decrease[product_index_decrease].count -= 1;
            }
            if(product_index_decrease !== -1 && cart_product_decrease[product_index_decrease].count == 0){
                cart_product_decrease.splice(product_index_decrease, 1);
            }
            return {
                ...state,
                cart_product: cart_product_decrease
            }
        case "ORDER_COMPLETE":
            return {
                ...state,
                cart_product: [],
                cart_open_model: false
            }
        default:
            return state;
    } 
}