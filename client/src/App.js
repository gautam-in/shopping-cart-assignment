// import logo from "./logo.svg";
import Header from "./components/Header";
import { connect } from "react-redux";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import { initiateAddCategory } from "redux/modules/category";
import { toggleCart } from "redux/modules/cart";

import Home from "./pages/Home";
import "./App.scss";
import Products from "pages/Products";
import CartPopup from "components/CartPopup";
import { useEffect } from "react";

function App({ initiateAddCategory, toggleCart, isHidden }) {
  useEffect(() => {
    initiateAddCategory();
  }, []);
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path={"/products/:categoryId"} element={<Products />} />
          <Route path={"/products"} element={<Products />} />
        </Routes>
      </div>
      {!isHidden && <CartPopup />}
    </>
  );
}

export default connect(({ cart: { isHidden } }) => ({ isHidden }), {
  initiateAddCategory,
  toggleCart,
})(App);
