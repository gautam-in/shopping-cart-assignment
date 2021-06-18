import React from 'react';
import Home from './Components/home';
import Products from './Components/products';
import Nav from './Components/Nav';
import './Styles/main.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function () {
  return (
    <Router>
      <header className="header">
        <Nav />
      </header>
      <main>
        <Switch>
          <Route path="/login">
            <Home />
          </Route>
          <Route path="/signup">
            <Home />
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
  );
}
