import { createContext, useEffect, useReducer } from "react";
import {useSelector} from 'react-redux';

import { createAction } from "../utils/reducer";
import {addCollectionAndDocuments, getAllDocuments, removeDocumentFromCollection} from '../utils/firebase';

const addCartItem = (currentUser, cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    let newCart = [];
    if(existingCartItem) {
        newCart = cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id ?
        {...cartItem, quantity: cartItem.quantity+1} : cartItem);
    } else {
        newCart = [...cartItems, {...productToAdd, quantity: 1}];
    }
    if(currentUser) {
        addCollectionAndDocuments('cart', newCart);
    }
    return newCart;
}

const removeCartItem = (currentUser, cartItems, productToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id);
    if(existingCartItem.quantity === 1) {
        if(currentUser) {
            removeDocumentFromCollection('cart', existingCartItem.id);
        }
        return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
    }
    const newCart = cartItems.map((cartItem) => {
        if(cartItem.id === productToRemove.id) {
            if(cartItem.quantity !== 0) {
                return  {...cartItem, quantity: cartItem.quantity-1}
            }
        }
        return cartItem;
    })
    if(currentUser) {
        addCollectionAndDocuments('cart', newCart);
    }
    return newCart;
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
    const currentUser = useSelector((state) => state.user.currentUser);

    useEffect(() => {
        if(currentUser) {
            const getAllDocs = async () => {
                const cartItems = await getAllDocuments('cart');
                console.log('Cart Items ::', cartItems);
                updateCartItemReducer(cartItems);
            }
            getAllDocs();
        }

    },[currentUser]);

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

        fetch('/addToCart',
        {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({product: productToAdd})
          })
        .then(response => response.json())
        .then((data) => {
            console.log('Data', data);
            if(data.response.toLowerCase() === 'success') {
                const newCartItems = addCartItem(currentUser, cartItems, productToAdd);
                updateCartItemReducer(newCartItems);
            } else {
                alert('Not able to add product to cart');
            }
        })
    }

    const removeItemFromCart = (productToRemove) => {
        const newCartItems = removeCartItem(currentUser, cartItems, productToRemove);
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