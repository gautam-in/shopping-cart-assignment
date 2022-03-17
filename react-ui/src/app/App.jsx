import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Register from "./pages/Register";
import "./style.scss";
export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route exact path="/" element={<h1>test</h1>} /> */}
        <Route path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
