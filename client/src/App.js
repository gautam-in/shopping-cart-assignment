import React, { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Header from "./Helper/Header/index.js";
import Home from "./Component/Home/index.js";
import Footer from "./Helper/Footer/index.js";
import Products from "./Component/Product/index.js";
import Register from "./Component/Register/index.js";
import SignIn from "./Component/Login/index.js";
import AuthContext from "./Auth.jsx";
import store from "./store.js";
import NotFound from "./Helper/NotFound/index";
import ErrorBoundary from "./Helper/ErrorBoundary/index.js";

import "./App.css";


const App = () => {
  const [userAuthentication, setUserAuthentication] = useState(
    localStorage.getItem("status")
  );

  const contextVal = {
    userAuthentication,
    toggleUserAuthentication: () => {
      setUserAuthentication(
        userAuthentication === "logged-in" ? "" : "logged-in"
      );
    },
  };

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <AuthContext.Provider value={contextVal}>
          <BrowserRouter>
            <Header />
            <main>
              <Switch>
                <Route exact path="/" render={() => <Redirect to="/home" />} />
                <Route path="/login" component={SignIn} />
                <Route path="/sign-up" component={Register} />
                <Route path="/home" component={Home} />
                <Route path="/products" component={Products} />
                <Route path="*" exact={true} component={NotFound} />
              </Switch>
            </main>
            <Footer />
          </BrowserRouter>
        </AuthContext.Provider>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
