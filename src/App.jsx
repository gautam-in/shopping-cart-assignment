import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";

import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Register from "./pages/Register";
import { CartProvider } from "./services/cartContext";
import cartServices from "./services/cartServices";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: 0,
    };
  }

  updateCart = () => {
    let numberOfItems = 0;
    for (let product in cartServices.products) {
      numberOfItems += cartServices.products[product].count;
    }
    this.setState({
      items: numberOfItems,
    });
  };

  render() {
    return (
      <Router>
        <div className="shopping-site">
          <header>
            <Navbar items={this.state.items} />
          </header>
          <main>
            <CartProvider value={this.updateCart}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Register />} />
              </Routes>
            </CartProvider>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
