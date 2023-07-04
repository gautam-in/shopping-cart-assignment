import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import classes from "./App.module.scss";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Products from "./pages/Products";
import CartModal from "./components/CartModal";
import { useCart } from "./context/cart";

function App() {
  const { isCartOpen } = useCart();
  return (
    <>
      <Header />
      <main className={classes.container} id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<Products />} />
        </Routes>
      </main>
      {isCartOpen ? <CartModal /> : null}

      <Footer />
    </>
  );
}

export default App;
