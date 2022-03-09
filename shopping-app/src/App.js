import React, { useReducer, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

import { CartContext } from "./Components/Header/CartContext";
import Loader from "./Components/Loader";
import { CartReducer, initialState } from "./Components/Header/CartReducer";
import { FallBackUI } from "./Pages/FallbackUI";

const Home = lazy(() => import("./Pages/Home"));
const Products = lazy(() => import("./Pages/Products"));
const Footer = lazy(() => import("./Components/Footer"));
const Header = lazy(() => import("./Components/Header/Header"));
const SignIn = lazy(() => import("./Pages/SignIn"));
const Register = lazy(() => import("./Pages/Register"));
const Cart = lazy(() => import("./Pages/Cart"));

function App() {
  const [state, dispatch] = useReducer(CartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      <Suspense fallback={<Loader name="Header" />}>
        <Header />
      </Suspense>

      <Suspense fallback={<Loader name="Component" />}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="*">
            <FallBackUI title="Oops! Page Not Found." />
          </Route>
        </Switch>
      </Suspense>

      <Suspense fallback={<Loader name="Footer" />}>
        <Footer />
      </Suspense>
    </CartContext.Provider>
  );
}

export default App;
