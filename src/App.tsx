import React, { useEffect, useReducer, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Layout, ProductGrid, CartPopup } from "./components/index";
import { Home, Products, Cart, Register, SignIn, PageNotFound } from "./pages/index";
import { cartReducer } from "./utils/cartReducer";
import { useViewport } from "./hooks/useViewport";
import type { Product } from "./types/customTypes";

const initialCartState: Product[] = [] ;

export const App = () => {

  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);
  const [cartPopupToggle, setCartPopupToggle] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const windowWidth = useViewport();

  // Use the cart popup for desktop version | Use cart page for mobile versions
  useEffect(() => {
    if(windowWidth > 768 && pathname.includes("cart")) {
      navigate("/");
    }
  }, [windowWidth])

    return (
      <>
        <Routes>
          <Route path="/" element={<Layout cartSize={cartState.length} popupProps={{cartPopupToggle, setCartPopupToggle}}/>}>
            <Route index element={<Home />}/>  
            <Route path="products" element={<Products />}>
              <Route path="all" element={<ProductGrid cartDispatch={cartDispatch} />}/>
              <Route path=":id" element={<ProductGrid cartDispatch={cartDispatch} />}/>
            </Route> 
            <Route path="signin" element={<SignIn />} />
            <Route path="register" element={<Register />}/>
            {windowWidth < 768 ? <Route path="cart" element={<Cart cartState={cartState} cartDispatch={cartDispatch}/>}/> : null}
          </Route>
          <Route path="*" element={<PageNotFound />}/>   
        </Routes>
        <CartPopup cartProps={{cartState, cartDispatch}} popupProps={{cartPopupToggle, setCartPopupToggle}}/>
      </>
      )
}