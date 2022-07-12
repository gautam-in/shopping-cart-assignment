import './App.css';
import { Route, Routes } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Loader from './components/loading/Loader';

const CartPage = lazy(() => import("./pages/CartPage"))
const HomePage = lazy(() => import("./pages/HomePage"))
const LoginPage = lazy(() => import("./pages/LoginPage"))
const ProductListingPage = lazy(() => import("./pages/ProductListingPage"))
const SignupPage = lazy(() => import("./pages/SignupPage"))


function App() {

  return (
    <Suspense fallback = {<Loader type = {"spin"} color = {"blue"} className = {"loader-align"}/>}>
      <div className="App" data-testid = "app">
        <Routes>
          <Route path = "/" element = {<HomePage />} />
          <Route path = "login" element = {<LoginPage />} />
          <Route path = "signup" element = {<SignupPage />} />
          <Route path = "cart" element = {<CartPage />} />
          <Route path = "products" element = {<ProductListingPage />}>
            <Route path = "cart" element = {<CartPage />} />
          </Route>
        </Routes>

      </div>
    </Suspense>
  );
}

export default App;
