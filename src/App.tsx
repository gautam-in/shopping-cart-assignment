import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Products } from "./pages/Products/Products";
import { Layout } from "./components/Layout/Layout";

export const App = () => {
    return (
      <BrowserRouter>
        <Layout>
          <Routes>   
            <Route path="/" element={<Home />}/>  
            <Route path="products" element={<Products />}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    )
}