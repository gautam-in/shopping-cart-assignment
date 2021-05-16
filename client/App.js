import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./components/redux/store";

import Home from "./components/pages/Home/Home";
import Header from "./components/organisms/Header/Header";
import ProductsListing from "./components/pages/ProductsListing/ProductsListing";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";
import CartPage from "./components/pages/CartPage/CartPage";
import NotFound from "./components/pages/NotFound";
import Footer from "./components/organisms/Footer/Footer";

import useDevice from "./components/customHooks/useDevice";

import "App.scss";

export const DeviceContext = React.createContext();

const App = () => {
  const location = useLocation();
  const { isMobile, isTablet, isDesktop } = useDevice();

  return (
    <div className="App">
      <Provider store={store}>
        <DeviceContext.Provider value={{ isMobile, isTablet, isDesktop }}>
          <Header />
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
            <Redirect exact path="/" to="home" />
            <Route path="/" component={NotFound} />
          </Switch>
          {location.pathname !== "/cart" && <Footer />}{" "}
        </DeviceContext.Provider>
      </Provider>
    </div>
  );
};

export default App;
