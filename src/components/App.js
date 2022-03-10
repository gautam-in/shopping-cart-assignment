import React from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import store from "./../store";
import Login from "./login";
import Signup from "./signup";
import Navbar  from "./navbar";
import Home from "./home";
import Footer from "./footer"
import Products from "./products";

import './App.scss';

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/products" element={<Products/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/" element={<Login/>} />
        </Routes>
        <Footer />
      </Provider>
    </Router>
  );
};

export default App;