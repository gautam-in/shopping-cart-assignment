import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";

import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Register from "./pages/Register";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="shopping-site">
          <header>
            <Navbar />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Register />} />
            </Routes>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
