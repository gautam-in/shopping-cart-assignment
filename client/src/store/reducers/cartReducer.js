import * as types from "../actions/actionTypes";

const initState = {
    cart : JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")): []
}

const addCartItem = (state,action) => {
    return { cart : [...state.cart,action.payload ]}
}

const incrementQty = (state,action) => {
    let newCart = state.cart.map(item =>{
       return item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
    });
    return { cart : newCart }
}

const decrementQty = (state,action) => {
    let newCart = state.cart.map(item=> {
      return item.id === action.payload.id ? { ...item, qty: item.qty -1 } : item
    })
    newCart = newCart.filter(item => item.qty > 0);
    return {cart: newCart}
}

const doCartEmpty = () => {
    return { cart : [] }
}

const cartReducer = (state = initState, action) => {
    switch(action.type) {
        case types.ADD_CART_ITEM : return addCartItem(state,action);
        case types.INCREMENT_QTY : return incrementQty(state,action);
        case types.DECREMENT_QTY : return decrementQty(state,action);
        case types.EMPTY_CART : return doCartEmpty(state,action);
        default : return state;
    }
}

export default cartReducer;
