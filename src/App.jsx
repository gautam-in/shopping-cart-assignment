import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";

class App extends Component {
  render() {
    return (
      <div className="shopping-site">
        <header>
          <Navbar />
        </header>
        <main>
          <Router>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Register />} />
            </Routes>
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
