import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { ProductGrid } from "./components/ProductGrid/ProductGrid";
import { Home } from "./pages/Home/Home";
import { Products } from "./pages/Products/Products";
import { Register } from "./pages/Register/Register";
import { SignIn } from "./pages/SignIn/SignIn";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";

export const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />}/>  
            <Route path="products" element={<Products />}>
              <Route path="all" element={<ProductGrid />}/>
              <Route path=":id" element={<ProductGrid />}/>
            </Route> 
            <Route path="signin" element={<SignIn />} />
            <Route path="register" element={<Register />}/>
          </Route>
          <Route path="*" element={<PageNotFound />}/>   
        </Routes>
    </BrowserRouter>
    )
}