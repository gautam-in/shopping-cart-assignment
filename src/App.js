import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import MainNavigation from "./components/MainNavigation";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));

function App() {
  return (
    <div className="sabka-bazaar">
      <MainNavigation />
      <Suspense fallback={<LoadingSpinner />}>
        <Switch>
          <Route path="/products">
            <ProductsPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/signin">
            <LoginPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
