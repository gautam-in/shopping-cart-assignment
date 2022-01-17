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
import Cart from "./components/Cart";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      isCartShown: false,
      total: 0,
    };
  }

  updateCart = () => {
    cartServices.getTotal();
    this.setState({
      items: cartServices.products,
      total: cartServices.total,
    });
  };

  showCart = () => {
    this.setState({
      isCartShown: true,
    });
  };

  closeCart = () => {
    this.setState({
      isCartShown: false,
    });
  };

  render() {
    let numberOfItems = 0;
    for (let product in this.state.items) {
      numberOfItems += this.state.items[product].count;
    }

    return (
      <Router>
        <div className="shopping-site">
          <header>
            <Navbar items={numberOfItems} showCart={this.showCart} />
          </header>
          <main>
            <CartProvider value={this.updateCart}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Register />} />
              </Routes>
              {this.state.isCartShown && (
                <Cart
                  items={this.state.items}
                  total={this.state.total}
                  numberOfItems={numberOfItems}
                  closeCart={this.closeCart}
                />
              )}
            </CartProvider>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
