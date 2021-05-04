import React, { lazy } from "react";

import ProtectedRoute from "./protectedRoute";
import RestrictedRoute from "./restrictedRoute";
import CustomRoute from "./customRoute";

const Home = lazy(() => import("../containers/home"));
const Register = lazy(() => import("../containers/registerMyBazar"));
const LoginMyBazar = lazy(() => import("../containers/loginMyBazar"));
const ProductList = lazy(()=>import("../containers/productList"));
const NotFound = lazy(() => import("../containers/404"));

const Routes = () => {
  return (
    <>
      <CustomRoute path="/" exact component={Home} />
      <ProtectedRoute path="/home" exact component={Home} />
      <RestrictedRoute path="/login-your-account" component={LoginMyBazar} />
      <RestrictedRoute path="/create-your-account" component={Register} />
      <CustomRoute path="/products" component={ProductList} />
      {/* <ProtectedRoute path="/cart" component={Cart} /> */}
      <CustomRoute path="/404" component={NotFound} />
    </>
  );
};

export default Routes;
