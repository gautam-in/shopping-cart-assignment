

export const setCartItems = (data)=>({
    type:"SET_CART_ITEMS",
    payload:data
});
export const removecartItems = (data)=>({
    type:"REMOVE_CART_ITEMS",
    payload:data
});

export const updateCartQuantity = (data)=>({
    type:"UPDATE_CART_QUANTITY",
    payload:data
});
export const resetCartState =() =>({
    type:"RESET_CART_STATE",
    
})