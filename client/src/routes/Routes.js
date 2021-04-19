// import React from "react";
// import Cart from "../containers/Cart/Cart";
// import Home from "../containers/Home/Home";
// import Login from "../containers/Login/Login";
// import Products from "../containers/Products/Products";
// import Register from "../containers/Register/Register";
// import ProtectedRoute from "./ProtectedRoute";
// import RestrictedRoute from "./RestrictedRoute";

// function Routes() {
//   return (
//     <>
//       <ProtectedRoute path="/" exact component={Home} />
//       <ProtectedRoute path="/home" exact component={Home} />
//       <RestrictedRoute path="/login" component={Login} />
//       <RestrictedRoute path="/register" component={Register} />
//       <ProtectedRoute path="/cart" component={Cart} />
//       <ProtectedRoute path="/products" component={Products} />
//     </>
//   );
// }

// export default Routes;

import React, { lazy, Suspense } from "react";
const Cart = lazy(() => import("../containers/Cart/Cart"));
const Home = lazy(() => import("../containers/Home/Home"));
const Login = lazy(() => import("../containers/Login/Login"));
const Products = lazy(() => import("../containers/Products/Products"));
const Register = lazy(() => import("../containers/Register/Register"));
const ProtectedRoute = lazy(() => import("./ProtectedRoute"));
const RestrictedRoute = lazy(() => import("./RestrictedRoute"));

function Routes() {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <ProtectedRoute path="/" exact component={Home} />
        <ProtectedRoute path="/home" exact component={Home} />
        <RestrictedRoute path="/login" component={Login} />
        <RestrictedRoute path="/register" component={Register} />
        <ProtectedRoute path="/cart" component={Cart} />
        <ProtectedRoute path="/products" component={Products} />
      </Suspense>
    </>
  );
}

export default Routes;
