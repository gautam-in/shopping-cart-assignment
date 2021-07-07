import { createContext, useState } from "react";

export const TokenContext = createContext();

export const TokenProvider = ({ children }) => {

    const [ user, setUser] = useState(null);

    return (
        <TokenContext.Provider value={{user, setUser}}>
            {children}
        </TokenContext.Provider>
    )
}
