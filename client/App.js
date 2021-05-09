import React, { useEffect } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./components/redux/store";

import Home from "./components/pages/Home/Home";
import Header from "./components/organisms/Header/Header";
import ProductsListing from "./components/pages/ProductsListing/ProductsListing";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";
import CartPage from "./components/pages/CartPage/CartPage";
import Footer from "./components/organisms/Footer/Footer";

import "App.scss";
import useDevice from "./components/customHooks/useDevice";

const App = () => {
  const location = useLocation();
  const { isMobile, isDesktop } = useDevice();

  return (
    <div className="App">
      <Provider store={store}>
        <Header isMobile={isMobile} isDesktop={isDesktop} />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/products" component={ProductsListing} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route
            path="/cart"
            render={() => {
              if (isDesktop) return <Redirect to="/home" />;
              else return <CartPage />;
            }}
          />
          <Redirect path="/" to="home" />
        </Switch>
        {location.pathname !== "/cart" && <Footer />}
      </Provider>
    </div>
  );
};

export default App;
