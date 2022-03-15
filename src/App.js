import React from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "./components/organisms/Footer/Footer";
import Header from "./components/organisms/Header/Header";
import Home from "./components/pages/Home/Home";
import Products from "./components/pages/Products/Products";
import Signin from "./components/pages/Signin/Signin";
import Register from "./components/pages/Register/Register";
import CartPage from "./components/pages/CartPage/CartPage";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/*" element={<Products />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/cartpage" element={<CartPage />} />
      </Routes>
      <Footer />
    </>
  );
}
