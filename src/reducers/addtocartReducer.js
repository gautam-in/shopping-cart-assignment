const initialState = {
   cart: [],
}

export const cartReducer = (state = initialState, action) => {
    debugger;
    const { payload } = action;
    console.log(payload);
    let newCart = [...state.cart];
    let itemIndex = state.cart.findIndex(obj => obj.id === payload.id);
    let currItem = state.cart[itemIndex];
    switch (action.type) {
        case "ADDTOCART":
            if(currItem){
                currItem.quantity += 1;
                state.cart[itemIndex] = currItem;
                newCart = [...state.cart]
            } else {
                let selectedItem = payload;
                selectedItem.quantity = 1
                newCart = newCart.concat(selectedItem)
            }

            return {
                cart: newCart
            }
        case "DECREMENT" :
            if(currItem && currItem.quantity > 1){
                currItem.quantity -= 1;
                state.cart[itemIndex] = currItem;
                newCart = [...state.cart]
            } else if(currItem && currItem.quantity === 1){
                newCart = state.cart.filter((obj => obj.id !== currItem.id))
            }
            return {
                cart: newCart
            }
        default : return state

    }
    return state
}