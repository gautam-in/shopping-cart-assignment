import React, { lazy, Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { updateCart } from "../../redux/cart/CartActions";
import Error404 from "../errorScreens/404";
import LoadingScreen from "../loadingScreen/LoadingScreen";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import "./MainLayout.scss";

const LazyHome = lazy(() => import("../home/homePage"));
const LazyProduct = lazy(() => import("../products/ProductsPage"));
const LazyLogin = lazy(() => import("../onBoarding/LoginScreen"));
const LazyRegister = lazy(() => import("../onBoarding/Register"));
const LazyCart = lazy(() => import("../cart/cartPage"));

function MainLayout() {
  const dispatch = useDispatch();
  const [auth, setAuth] = useState(false);
  const state = useSelector((state) => state);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (token && !auth) {
      setAuth(true);
    }
    if (cart) {
      dispatch(updateCart(cart));
    }
  }, []);

  return (
    <div className="main-layout-container">
      <Header />
      <div>
        <Suspense fallback={<LoadingScreen />}>
          <Switch>
            <Route path="/" exact component={() => <LazyHome />} />
            <Route path="/login" exact component={() => <LazyLogin />} />
            <Route path="/signup" exact component={() => <LazyRegister />} />
            <Route
              path="/products/:categoryId?"
              component={() => <LazyProduct />}
            />
            <Route path="/cart" exact component={() => <LazyCart />} />
            <Route path="/patherror" exact component={Error404} />
          </Switch>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
