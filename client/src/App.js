import React, { useEffect, useState, Suspense } from "react";

import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { CartActions } from "./store/cart-slice";

import Login from "./pages/Login";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import NotFound from "./pages/NotFound";
import LoadingSpinner from "./components/LoadingSpinner";

const Home = React.lazy(() => import("./pages/Home"));
const Products = React.lazy(() => import("./pages/Products"));
const Cart = React.lazy(() => import("./pages/Cart"));
const Signup = React.lazy(() => import("./pages/Signup"));

function App() {
  let dispatch = useDispatch();
  let isLoggedin = useSelector((state) => state.loginSlice.isLoggedin);
  let [categoriesData, setCategoriesData] = useState([]);
  let [bannerData, setBannerData] = useState([]);
  let [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/userCart/")
      .then((data) => data.json())
      .then((json) => {
        dispatch(CartActions.replaceCart(json));
      });
  }, [dispatch]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((data) => data.json())
      .then((categoriesdata) => {
        setCategoriesData(categoriesdata);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/banners")
      .then((data) => data.json())
      .then((bannerdata) => {
        setBannerData(bannerdata);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((data) => data.json())
      .then((productdata) => {
        setProductData(productdata);
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
            <Home
              categoriesData={categoriesData}
              bannerData={bannerData}
            ></Home>
          </Route>

          <Route path="/Products" exact>
            <Products
              categoriesData={categoriesData}
              productData={productData}
            ></Products>
          </Route>

          <Route path="/Products/:productKey">
            <Products
              categoriesData={categoriesData}
              productData={productData}
            ></Products>
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
