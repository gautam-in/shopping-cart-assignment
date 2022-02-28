import {
    createContext,
    useState
} from "react";

export const MainContext = createContext();

export const MainProvider = ({
    children
}) => {
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [cartTotalItems, setCartTotalItems] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [user, setUser] = useState(null);


    return ( <MainContext.Provider value = {
            {
                cart,
                setCart,
                cartTotal,
                setCartTotal,
                cartItems,
                setCartItems,
                cartTotalItems,
                setCartTotalItems,
                user,
                setUser
            }
        } > {
            children
        } </MainContext.Provider>
    );
}