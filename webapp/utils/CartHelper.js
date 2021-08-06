import {useContext, useState, createContext, useEffect} from "react";

export const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
}

export const useCartProvider = () => {
    const [cart,setCart] = useState([]);
    const [cartValue, setCartValue] = useState(0);
    useEffect(() => {
        console.log("cart value", cartValue )
    }, [cartValue]);

    useEffect(async () => {
        if(window) {
           const userData = JSON.parse(window.localStorage.getItem("userData"));
            if(userData?.cart?.items) {
                    console.log("data", userData)
                    setCartValue((currentCartValue) => currentCartValue + userData.cart.value)
                    setCart((currentCart) => [...currentCart, ...userData.cart.items])
            }
        }
    }, [])

    const addToCart = (cartItem) => {
        setCart([...cart, cartItem])
        console.log("cartitem", cartItem)
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

    const getCartData = () => {
        return {
            value: cartValue,
            items: cart
        }
    }

    return {
        addToCart,
        removeFromCart,
        resetCart,
        getCartCount,
        editQuantity,
        getCartItems,
        getCartValue,
        cart,
        getCartData
    }
}