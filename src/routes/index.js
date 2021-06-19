import React, { lazy } from "react";
import { Route } from "react-router-dom";

import { useDevice } from "../utils";

const Home = lazy(() => import("../containers/home"));
const Register = lazy(() => import("../containers/registerMyBazar"));
const LoginMyBazar = lazy(() => import("../containers/loginMyBazar"));
const ProductList = lazy(() => import("../containers/productList"));
const Cart = lazy(() => import("../containers/cartPage"));
const NotFound = lazy(() => import("../containers/404"));

const Routes = () => {
  const { isDesktop } = useDevice();
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/home" exact component={Home} />
      <Route path="/login-your-account" component={LoginMyBazar} />
      <Route path="/create-your-account" component={Register} />
      <Route path="/products" component={ProductList} />
      {!isDesktop && <Route path="/cart" component={Cart} />}
      <Route path="/not-found" component={NotFound} />
    </>
  );
};

export default Routes;
