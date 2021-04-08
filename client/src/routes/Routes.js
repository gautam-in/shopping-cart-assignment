import React from "react";
import Cart from "../containers/Cart/Cart";
import Home from "../containers/Home/Home";
import Login from "../containers/Login/Login";
import Products from "../containers/Products/Products";
import Register from "../containers/Register/Register";
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
