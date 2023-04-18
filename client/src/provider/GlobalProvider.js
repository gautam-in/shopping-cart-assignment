import React, { useState } from "react"

export const GlobalContext = React.createContext()

export const GlobalProvider = ({ children }) => {
    // cart structure
    /*[{
        name: "",
        id: "",
        price: "",
        quantity: 2,
        imageURL: ""
    }]*/
    const [cart, setCart] = useState([])
    const [openCart, setOpenCart] = useState(false)
    const updateCart = (item, op) => {
        if (!['ADD', 'SUB', 'REMOVE'].includes(op))
            return;
            // deep copy cart items
        const cartItems = JSON.parse(JSON.stringify(cart))
        const found = cartItems.find(el => el.id === item.id)
        let message = null
        switch (op) {
            case 'ADD':
                if (found) {
                    found.quantity += 1
                    message = `Added ${item?.name} quantity ${found.quantity}`
                } else {
                    cartItems.push({
                        ...item,
                        quantity: 1
                    })
                    message = `Added ${item.name}`
                }
                break;
            case 'SUB':
                if (found && found.quantity > 1)
                    found.quantity -= 1
                else {
                    const index = cartItems.findIndex(el => el.id === item.id)
                    cartItems.splice(index, 1)
                }
                break;
            case 'REMOVE':
                const index = cartItems.finsIndex(el => el.id === item.id)
                cartItems.splice(index, 1)
                break;
            default:
                break;
        }

        setCart(cartItems)
        return message;
    }

    const value = {
        cart,
        updateCart,
        openCart,
        setOpenCart
    }
    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}