
import { Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Product from './components/Product'
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register"  element={<Register />} />
        <Route path="products" element={<Product />} />
        <Route path='cart' element={<Cart/>}/>
      </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
