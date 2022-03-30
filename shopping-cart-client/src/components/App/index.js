import React, { Component } from 'react';
import './App.css';
import Navbar from '../Navbar';
import Homepage from '../Homepage';
import LoginPage from '../Loginpage';
import SignupPage from '../SignupPage';
import ProductListingPagge from '../Productslistingpage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<ProductListingPagge />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignupPage />} />
        </Routes>
        <footer>
          CopyRight 2021-2022 Sabka Bazaar Grocery Supplies Pvt Ltd{' '}
        </footer>
      </div>
    );
  }
}

export default App;
