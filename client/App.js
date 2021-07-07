import "./App.scss";
import React, { useState, lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./containers/Home/Home";
import Footer from "./components/Footer/Footer";
import Register from "./containers/Auth/Register";
import SignIn from "./containers/Auth/SignIn";
import AuthContext from "./AuthContext";
import store from "./redux/store";
const Products = lazy(() => import("./containers/Products/Products"));
const Cart = lazy(() => import("./containers/Cart/Cart"));

const App = () => {
  const [userAuthentication, setUserAuthentication] = useState(
    sessionStorage.getItem("status")
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
    <Provider store={store}>
      <AuthContext.Provider value={contextVal}>
        <BrowserRouter>
          <Header />
          <main>
            <Suspense fallback={<small>Loading products...</small>}>
              <Switch>
                <Route exact path="/" render={() => <Redirect to="/home" />} />
                <Route path="/login" component={SignIn} />
                <Route path="/sign-up" component={Register} />
                <Route path="/home" component={Home} />
                <Route path="/products" component={Products} />
                <Route path="/cart" component={Cart} />
              </Switch>
            </Suspense>
          </main>
          <Footer />
        </BrowserRouter>
      </AuthContext.Provider>
    </Provider>
  );
};

export default App;
