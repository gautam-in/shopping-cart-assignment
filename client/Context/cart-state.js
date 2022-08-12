import React, { createContext, useEffect, useState } from 'react'
import { RetriveCartList } from '../lib/indexDB'

export const CartContext = createContext()

export default function CartState(props) {
    const [cartOpened, setCartOpened] = useState(false)
    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            RetriveCartList((result) => {
                let finalCount = result.reduce((curr, total) => {
                    return curr + total.product_count
                }, 0)
                setCartCount(finalCount)
            })
        }, 1000);
    })

    const increaseCartCount = () => {
        setCartCount(c => c + 1)
    }

    const decreaseCartCount = () => {
        setCartCount(c => c + 1)
    }

    const toggleCart = (val) => {
        setCartOpened(val)
    }

    return (
        <CartContext.Provider value={{ cartOpened, toggleCart, cartCount, increaseCartCount, decreaseCartCount }}>
            {props.children}
        </CartContext.Provider>
    )
}

