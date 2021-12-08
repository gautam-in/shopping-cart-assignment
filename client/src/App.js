import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import Signin from "./pages/Signin";
import ProductList from "./pages/ProductList";
import React, { useState, useEffect } from "react";
import {
  getCartItemsCount,
  increaseItemCount,
  decreaseCount,
} from "./utils/cart";
import { getCartItems } from "./utils/cart";

function App() {
  const [itemCount, setItemCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const cartItemCouter = () => {
    setItemCount(getCartItemsCount());
  };

  useEffect(() => {
    setItemCount(getCartItemsCount());
    setCartItems(getCartItems());
  }, []);

  const increaseCountHandler = (id) => {
    increaseItemCount(id);
    setItemCount(getCartItemsCount());
    setCartItems(getCartItems());
  };

  const decreaseCountHandler = (id) => {
    decreaseCount(id);
    setItemCount(getCartItemsCount());
    setCartItems(getCartItems());
  };

  return (
    <BrowserRouter>
      <Header
        itemCount={itemCount}
        cartItems={cartItems}
        setItemCount={setItemCount}
        setCartItems={setCartItems}
        increaseCountHandler={increaseCountHandler}
        decreaseCountHandler={decreaseCountHandler}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/signin"
          element={<Signin setItemCount={setItemCount} />}
        />
        <Route
          path="/products/:id"
          element={<ProductList cartItemCouter={cartItemCouter} />}
        />
      </Routes>
      {/* <Cart /> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
