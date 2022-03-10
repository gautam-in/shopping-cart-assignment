export const addItemToCart=(cartItems=[],cartItemToAdd)=>{
    console.log(cartItems,cartItemToAdd);
    const isExist = cartItems.find((cartItem)=>(
        cartItem.id === cartItemToAdd.id
    ))

    if(isExist)
    {
        return cartItems.map((cartItem)=>(
            cartItem.id === cartItemToAdd.id ? {...cartItem,quantity:cartItem.quantity + 1} : cartItem
       ))
    }

    return [...cartItems,{...cartItemToAdd,quantity:1}]
}

export const removeItemFromCart=(cartItems=[],cartItemToRemove)=>{
    const existingCartItem = cartItems.find(cartItem=>cartItem.id === cartItemToRemove.id)

    if(existingCartItem.quantity === 1)
    {
        return cartItems.filter((cartItem)=>(
            cartItem.id !== cartItemToRemove.id
            ))
    }

    return cartItems.map((cartItem)=>(
        cartItem.id === cartItemToRemove.id ? {...cartItem,quantity:cartItem.quantity-1}:cartItem
    ))
}

export const totalItemsInCart =(cartItems=[])=>{

  return cartItems.reduce((accumalatedQuantity,cartItem)=>accumalatedQuantity + cartItem.quantity * cartItem.price,0)

}

export const itemQuantity = (cartItems=[])=>{
    return cartItems.reduce((accumalatedQuantity,cartItem)=>accumalatedQuantity + cartItem.quantity,0)
}
