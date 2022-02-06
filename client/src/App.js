import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products/Products";
import SignIn from "./components/SignInSignUp/SignIn";
import Register from "./components/SignInSignUp/Register";
import Cart from "./components/Cart/Cart";

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productId) => {
    const product = products.find((product) => product.id === productId);
    if (cartItems.includes(product)) {
      alert("Product is already added in cart");
    } else {
      fetch("http://localhost:5000/addToCart", { method: "POST" })
        .then((res) => res.json())
        .then((data) => alert(data.responseMessage));
      setCartItems([
        ...cartItems,
        products.find((product) => product.id === productId),
      ]);
    }
  };

  let totalCartPrice = cartItems.reduce(
    (total, item) => (total += item.price),
    0
  );

  return (
    <>
      <BrowserRouter>
        <Header handleShow={handleShow} cartItems={cartItems} />
        <div className="container margin-fixed-top">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={<Products addToCart={addToCart} />}
            />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      <Cart
        cartItems={cartItems}
        show={show}
        handleClose={handleClose}
        products={products}
        totalCartPrice={totalCartPrice}
      />
    </>
  );
}

export default App;
