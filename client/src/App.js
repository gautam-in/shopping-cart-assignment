import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./Components/SignIn/SignIn";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Register from "./Components/SignIn/Register";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signIn" element={<SignIn />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/Products/:categoryId" element={<Products />} />
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
