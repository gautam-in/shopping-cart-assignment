import React, { useState } from 'react';
import Home from './Components/home';
import Products from './Components/products';
import Login from './Components/login';
import Register from './Components/register';
import Nav from './Components/Nav';
import './Styles/main.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CartContext from './CartContext';

export default function () {
  const [cart, setCart] = useState([]);
  const value = { cart, setCart };

  return (
    <CartContext.Provider value={value}>
      <Router>
        <header className="header">
          <Nav />
        </header>
        <main>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/products/:categoryId">
              <Products />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>
    </CartContext.Provider>
  );
}
