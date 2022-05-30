import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Products } from "./pages/Products/Products";
import { Layout } from "./components/Layout/Layout";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";
import { ProductGrid } from "./components/ProductGrid/ProductGrid";

export const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />}/>  
            <Route path="products" element={<Products />}>
              <Route path=":id" element={<ProductGrid />}/>
            </Route>
          </Route>
          <Route path="*" element={<PageNotFound />}/>   
        </Routes>
    </BrowserRouter>
    )
}