import {useContext, useState, createContext} from "react";

export const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
}

export const useCartProvider = () => {
    const [cart,setCart] = useState([]);

    const addToCart = (cartItem) => {
        setCart([...cart, cartItem])
    }

    const removeFromCart = (product_uid) => {
        let editedCart = [...cart];
        editedCart.splice(editedCart.findIndex((item) => item.product_uid === product_uid), 1)
        setCart(editedCart)
    }

    const resetCart = () => {
        setCart([])
    }

    const getCartCount = () => {
        return cart.length;
    }

    const editQuantity = (product_uid, newQuantity) => {
        let editedCart = [...cart];
        const itemIndex = editedCart.findIndex((item) => item.product_uid === product_uid);
        if(itemIndex > -1) {
            editedCart[itemIndex].quantity = newQuantity
        }
        return editedCart;
    }

    return {
        addToCart,
        removeFromCart,
        resetCart,
        getCartCount,
        editQuantity
    }
}