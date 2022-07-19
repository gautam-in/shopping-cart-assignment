import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Header from "./components/layout/Header";
import Products from "./components/products/Products";
function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route exact path="home" element={<Home />} />
          <Route exact path="login" element={<Login />} />
          <Route exact path="signup" element={<Register />} />
          <Route index element={<Home />} />
          <Route exact path="products" element={<Products />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
