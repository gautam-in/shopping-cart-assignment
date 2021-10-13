import React,{useState,useEffect} from "react";
import { resetLogin } from "../Component/User/userFunc";
import { addItem,cartState } from "../Component/Cart/cartFunc";
const DataContext=React.createContext();
const Provider=DataContext.Provider;

function DataProvider({ children }) {
    let loginUser=JSON.parse(localStorage.getItem("loginuser"));
    let [user,setUser]=useState(loginUser);
    let [cart,setCart]=useState(cartState);

    useEffect(()=>{
        setUser(loginUser);
        // eslint-disable-next-line
    },[]);

    function logOut(){
        resetLogin();
        setUser(null);
        setCart(cartState);
    }

    function toggleCart(){
        setCart({
            ...cart,
            isCartOpen:!cart.isCartOpen
        });
    }
    function addToCart(product,add=true){
        setCart({
            ...cart,
            ...addItem(cart,product,add)
        });
    }

  return <Provider value={{user,logOut,setUser,cart,addToCart,toggleCart}}>{children}</Provider>;
}
export default DataProvider;

export function useGlobalData(){
    const ctx=React.useContext(DataContext);
    return {...ctx}
}
