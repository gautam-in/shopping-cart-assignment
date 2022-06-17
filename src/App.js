import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ProductListing from "./components/ProductListing/ProductListing";
import React, { useState, useEffect } from "react";
import Cart from "./components/CartPage/Cart";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const auth = JSON.parse(sessionStorage.getItem("Auth"));
    auth && setIsAuth(auth.auth);
  }, [isAuth]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header auth={isAuth} setIsAuth={setIsAuth} />
        <Routes>
          <Route path="/" element={<Login setIsAuth={setIsAuth} />} />

          <Route
            path="/home"
            auth={isAuth}
            exact
            element={isAuth ? <Home /> : <Navigate to="/" />}
          />
          <Route
            path="/products"
            element={isAuth ? <ProductListing /> : <Navigate to="/" />}
          />
          <Route
            path="/register"
            element={<Register setIsAuth={setIsAuth} />}
          />
          <Route
            exact
            path="/cartpage"
            element={isAuth ? <Cart /> : <Navigate to="/" />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
