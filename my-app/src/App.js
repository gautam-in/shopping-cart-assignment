import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.scss";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Card from "./components/Card";
import CopyRight from "./components/CopyRight";
import Register from "./components/Register";
import SignIn from "./components/SignIn";
import { useSelector } from "react-redux";
import CartModal from "./components/CartModal";

function App() {
  const { addtocart } = useSelector(store => store);
  var cartItemsCount = 0;
  addtocart.map(el => {cartItemsCount = cartItemsCount + el.count});
  return (
    <BrowserRouter>
    <header>
      <Card>
        <div className="row">
          <div className="col-xl-2 col-md-3 col-4 p-0">
            <img src="/static/images/logo_2x.png" alt="Brand logo" width="100%" />
          </div>
          <div className="col-xl-10 col-md-9 col-8 p-0">
            <div className="col-12 align-right font-black">
              <Link to="/signin">SignIn</Link>
              <Link to="/register">Register</Link>
            </div>
            <div className="col-12 header-nav">
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              <button className="btn cart-btn" data-toggle="modal" data-target="#exampleModal"><img src="/static/images/cart.svg" alt="Brand logo" width="100%" />{cartItemsCount} Items</button>
              <CartModal items={addtocart}/>
            </div>
          </div>
        </div>
      </Card>
      </header>
      <Routes>
        <Route path="/" element={<Categories />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      <CopyRight />
    </BrowserRouter>
  )
}
export default App;