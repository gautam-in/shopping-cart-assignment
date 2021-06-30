import React from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./containers/Home/Home";
import Footer from "./components/Footer/Footer";
import Products from "./containers/Products/Products";
import Register from "./containers/Auth/Register";
import SignIn from "./containers/Auth/SignIn";
import Cart from "./containers/Cart/Cart";

const App = () => {
  console.log("isAuthenticated:", localStorage.getItem("isAuthenticated"));
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              console.log("Navigating");
              return isAuthenticated ? (
                <Redirect to="/home" />
              ) : (
                <Redirect to="/login" />
              );
            }}
          />
          <Route path="/login" component={SignIn} />
          <Route path="/sign-up" component={Register} />
          <Route path="/home" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
