import React from "react";
import { Route } from "react-router-dom";
import Cart from "../components/Cart/Cart";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Products from "../components/Products/Products";
import Register from "../components/Register/Register";

function Routes() {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/home" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/cart" component={Cart} />
      <Route path="/products" component={Products} />
    </>
  );
}

export default Routes;
