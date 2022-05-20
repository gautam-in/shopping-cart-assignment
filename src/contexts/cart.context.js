import { createContext, useReducer } from "react";

import { createAction } from "../utils/reducer";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    if(existingCartItem) {
        return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id ?
        {...cartItem, quantity: cartItem.quantity+1} : cartItem);
    };

    return [...cartItems, {...productToAdd, quantity: 1}];
}

const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id);
    if(existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
    }
    return cartItems.map((cartItem) => {
        if(cartItem.id === productToRemove.id) {
            if(cartItem.quantity !== 0) {
                return  {...cartItem, quantity: cartItem.quantity-1}
            }
        }
        return cartItem;
    })
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => null,
    cartItems: [],
    setCartItems: () => null,
    cartCount: 0,
    removeItemFromCart: () => null,
    total: 0
});

const CART_ACTION_TYPES = {
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
    SET_CART_ITEMS: 'SET_CART_ITEMS'
}

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
}

export const cartReducer = (state, action) => {
    const {type, payload} = action
    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            }
        default:
            throw new Error(`Unhandeled Type ${type} in User Reducer`);
    }
}

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
    const {cartItems, cartCount, cartTotal, isCartOpen} = state;

    const updateCartItemReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total, cartItem) => total+cartItem.quantity, 0);
        const newCartTotal = newCartItems.reduce((total, cartItem) => total+cartItem.quantity*cartItem.price, 0);

        dispatch(createAction(
            CART_ACTION_TYPES.SET_CART_ITEMS,
            {
                cartItems: newCartItems,
                cartCount: newCartCount,
                cartTotal: newCartTotal
            }
            ))
    }

    const setIsCartOpen = (status) => {
        dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, status));
    }

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemReducer(newCartItems);
    }

    const removeItemFromCart = (productToRemove) => {
        const newCartItems = removeCartItem(cartItems, productToRemove);
        updateCartItemReducer(newCartItems);
    }

    const value = {
        isCartOpen,
        cartItems,
        cartCount,
        cartTotal,
        setIsCartOpen,
        addItemToCart,
        removeItemFromCart};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}