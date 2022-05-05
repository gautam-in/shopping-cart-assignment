import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './Login';
import Register from './Register';
import ProductList from './ProductList';
import Cart from './Cart';
import Checkout from './Checkout';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products/:category" element={<ProductList />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
