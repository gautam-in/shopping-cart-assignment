import React from "react";
import { Route } from "react-router-dom";
import Cart from "../components/Cart/Cart";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Products from "../components/Products/Products";
import Register from "../components/Register/Register";
import ProtectedRoute from "./ProtectedRoute";
import RestrictedRoute from "./RestrictedRoute";

function Routes() {
  return (
    <>
      <ProtectedRoute path="/" exact component={Home} />
      <ProtectedRoute path="/home" exact component={Home} />
      <RestrictedRoute path="/login" component={Login} />
      <RestrictedRoute path="/register" component={Register} />
      <ProtectedRoute path="/cart" component={Cart} />
      <ProtectedRoute path="/products" component={Products} />
    </>
  );
}

export default Routes;
