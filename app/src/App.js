import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Format from "./components/Layout/Format";
import CategoryContextProvider from "./contexts/CategoryContext";
import CartContextProvider from "./contexts/Cart.context";

const Register = lazy(() => import("./components/RegisterPage/Register"));
const SignIn = lazy(() => import("./components/Signin/Signin"));
const Checkout = lazy(() => import("./components/Checkout/Checkout"));
const Products = lazy(() => import("./components/Products/Products"));
const Home = lazy(() => import("./components/Homepage/home"));

function App() {
  return (
    <div className="App">
      <CategoryContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Format>
              <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  <Route path="/products" component={Products} />
                  <Route path="/register" component={Register} />
                  <Route path="/checkout" component={Checkout} />
                  <Route path="/signin" component={SignIn} />
                  <Route path="/register" component={Checkout} />
                  {/* Redirect all other URLs to Home page */}
                  <Route component={Home} />
                </Switch>
              </Suspense>
            </Format>
          </BrowserRouter>
        </CartContextProvider>
      </CategoryContextProvider>
    </div>
  );
}

export default App;
