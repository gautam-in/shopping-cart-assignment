import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import CartPage from "./Pages/CartPage/CartPage";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Products from "./Pages/Products/Products";
import Signup from "./Pages/Signup/Signup";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<Login />} />
        <Route exact path="/register" element={<Signup />} />
        <Route path="/products/*" element={<Products />} />
        <Route exact path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
