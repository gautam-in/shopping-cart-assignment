import { createContext, useState } from "react";

export const CartStateContext = createContext();

export const CartStateProvider = ({ children }) => {

    const [toggle, setToggle] = useState(false);

    return (
        <CartStateContext.Provider value={{toggle, setToggle}}>
            {children}
        </CartStateContext.Provider>
    )
}
