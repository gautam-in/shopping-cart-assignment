import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import ErrorBoundary from "./Component/ErrorBoundary/errorBoundary.component";
import Footer from "./Component/Footer/footer.component";
import Header from "./Component/Header/header.component";
import Spinner from "./Component/Spinner/spinner.component";
import CartContainer from "./Screen/Cart/cart.container";

const ProductPage = lazy(() => import("./Screen/Product/product.container"));
const LoginPage = lazy(() => import("./Screen/Login/login.container"));
const HomePage = lazy(() => import("./Screen/Home/home.container"));
const RegisterPage = lazy(() => import("./Screen/Register/register.conatiner"));

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route path="/" exact component={HomePage} />
              <Route path="/product" component={ProductPage} />
              <Route path="/login" exact component={LoginPage} />
              <Route path="/register" exact component={RegisterPage} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
        <CartContainer />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
