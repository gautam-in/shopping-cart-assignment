import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/Login";
import ProductListing from "../Pages/Products/ProductListing";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";

const MainContent = () => {
  return (
    <div className="contentWrapper">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/product" element={<ProductListing />}></Route>
        <Route exact path="/sign-up" element={<Register />}></Route>
      </Routes>
    </div>
  );
};

export default MainContent;
