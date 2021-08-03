import {useContext, useState, createContext} from "react";

export const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
}

export const useCartProvider = () => {
    const [cart,setCart] = useState([]);
    const [cartValue, setCartValue] = useState(0)

    const addToCart = (cartItem) => {
        setCart([...cart, cartItem])
        setCartValue((currentValue) => currentValue + cartItem.price)
    }

    const removeFromCart = (product_uid) => {
        let editedCart = [...cart];
        setCartValue((currentValue) => {
            return currentValue - editedCart.find((item) => item.product_uid === product_uid).price
        })
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
                if(editedCart[itemIndex].quantity > newQuantity) {
                    editedCart[itemIndex].quantity = newQuantity
                    setCartValue((currentValue) => currentValue - editedCart[itemIndex].price)
                } else if(editedCart[itemIndex].quantity < newQuantity) {
                    editedCart[itemIndex].quantity = newQuantity
                    setCartValue((currentValue) => currentValue + editedCart[itemIndex].price)
                }
        }
        return editedCart;
    }

    const getCartItems = () => {
        return cart
    }

    const getCartValue = () => {
        return cartValue
    }

    return {
        addToCart,
        removeFromCart,
        resetCart,
        getCartCount,
        editQuantity,
        getCartItems,
        getCartValue
    }
}