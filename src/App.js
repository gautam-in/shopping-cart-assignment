import './style.css';
import React,{useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.js"
import Register  from './pages/Register';
import Products from './pages/Products';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import Cart from './pages/Cart';



function App() {
  const [itemCount,setItemCount]=useState(0)
  const handleCartItem=(item)=>{
    setItemCount(item);
  }
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home ItemCount={itemCount} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<Products handleCartItem={handleCartItem} ItemCount={itemCount}/>} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products/:category" element={<Products />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
