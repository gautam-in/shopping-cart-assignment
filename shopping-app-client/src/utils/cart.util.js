function getTotalPriceAndQuantityOfCartItems(cartItems){
    const totalQuantity = cartItems.reduce((accumulator,cartItem)=>{
        return accumulator + cartItem.quantity

    },0)

    const totalPrice = cartItems.reduce((accumulator,cartItem)=>{
        return accumulator + cartItem.quantity * cartItem.price

    },0)

    return { totalPrice , totalQuantity }
    


}

export { getTotalPriceAndQuantityOfCartItems }