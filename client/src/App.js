import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./routes/login/login";
import Home from "./routes/home/home";
import Layout from "./components/layout/layout";
import Products from "./routes/products/products";
import Register from "./routes/register/register";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
      </Routes>
    </Layout>
  );
};

export default App;
