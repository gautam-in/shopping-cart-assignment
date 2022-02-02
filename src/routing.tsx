import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import PageNotFound from "./components/NotFound";
import Products from "./components/Products";
import SingIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function AppRouting() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/sign-in" element={<SingIn />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/products/:id" element={<Products />} />
      <Route path="/products" element={<Products />} />
      <Route path="/404" element={<PageNotFound />} />
      <Route path="*" element={<Navigate replace to="/404" />} />
    </Routes>
  );
}

export default AppRouting;
