import * as types from "./actionTypes"

const initState = {
    cart: JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")): []
}

const reducer = (state = initState, action) => {
    switch(action.type){
        case types.ADD_CART_ITEM:
            return {cart: [...state.cart, action.data]};
        case types.INCREMENT_QTY:
            let new_cart = state.cart.map((i)=>{
                i.id === action.data.id ? { ...i, qnty: i.qnty + 1} : i
            });
            return {cart: new_cart};
        case types.DECREMENT_QTY:
            let new_cart_dec = state.cart.map((i)=>
            {
                i.id === action.data.id ? {...i, qnty: i.qnty - 1}: i
            });
            new_cart_dec = new_cart_dec.filter((i) => i.qnty > 0);
            return {cart: new_cart_dec};
        case types.EMPTY_CART:
            return {cart: [] };
        default:
            return state;
    }
};

export default reducer;