import React, { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { ProductGrid } from "./components/ProductGrid/ProductGrid";
import { Home } from "./pages/Home/Home";
import { Products } from "./pages/Products/Products";
import { Register } from "./pages/Register/Register";
import { SignIn } from "./pages/SignIn/SignIn";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";
import { Cart } from "./pages/Cart/Cart";
import { cartReducer } from "./utils/cartReducer";
import type { Product } from "./types/customTypes";

const initialCartState: Product[] = [] ;

export const App = () => {

  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);

    return (
        <Routes>
          <Route path="/" element={<Layout size={cartState.length}/>}>
            <Route index element={<Home />}/>  
            <Route path="products" element={<Products />}>
              <Route path="all" element={<ProductGrid cartDispatch={cartDispatch} />}/>
              <Route path=":id" element={<ProductGrid cartDispatch={cartDispatch} />}/>
            </Route> 
            <Route path="signin" element={<SignIn />} />
            <Route path="register" element={<Register />}/>
            <Route path="cart" element={<Cart cartState={cartState} cartDispatch={cartDispatch}/>}/>
          </Route>
          <Route path="*" element={<PageNotFound />}/>   
        </Routes>
      )
}