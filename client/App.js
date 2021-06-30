import React from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./containers/Home/Home";
import Footer from "./components/Footer/Footer";
import Products from "./containers/Products/Products";
import Register from "./containers/Auth/Register";
import SignIn from "./containers/Auth/SignIn";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route path="/login">
            <SignIn />
          </Route>
          <Route path="/sign-up">
            <Register />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
