import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { CartActions } from "./store/cart-slice";

//import Home from "./pages/Home";

//import Products from "./pages/Products";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
//import Cart from "./pages/Cart";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import React, { Suspense, useEffect } from "react";
import NotFound from "./pages/NotFound";
import LoadingSpinner from "./components/LoadingSpinner";

const Home = React.lazy(() => import("./pages/Home"));
const Products = React.lazy(() => import("./pages/Products"));
const Cart = React.lazy(() => import("./pages/Cart"));

function App() {
  let dispatch = useDispatch();
  let isLoggedin = useSelector((state) => state.loginSlice.isLoggedin);

  useEffect(() => {
    fetch("http://localhost:5000/userCart/")
      .then((data) => data.json())
      .then((json) => {
        dispatch(CartActions.replaceCart(json));
      });
  }, []);

  return (
    <ErrorBoundary>
      <Header />
      <Suspense fallback={<LoadingSpinner />}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/Home"></Redirect>
          </Route>

          <Route path="/Login" exact>
            <Login></Login>
          </Route>

          <Route path="/Signup" exact>
            <Signup></Signup>
          </Route>

          <Route path="/Home" exact>
            <Home></Home>
          </Route>

          <Route path="/Products" exact>
            <Products></Products>
          </Route>

          <Route path="/Products/:productKey">
            <Products></Products>
          </Route>
          {isLoggedin && (
            <Route path="/Cart" exact>
              <Cart></Cart>
            </Route>
          )}

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Suspense>
      <Footer />
    </ErrorBoundary>
  );
}

export default App;
