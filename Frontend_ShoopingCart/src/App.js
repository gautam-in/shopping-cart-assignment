import './App.css';
import React, { useState } from 'react';

import { Routes, Route } from 'react-router-dom';
import Header from './Ecommerce/Header/Header';
import Register from './Ecommerce/Register/Register';
import Homepage from './Ecommerce/Homepage/Homepage';
import Product from './Ecommerce/ProductListingPage/Product';
import Login from './Ecommerce/Login/Login';
import axios from 'axios';
import * as api from './Ecommerce/api';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [scrolling, setScrolling] = useState(false);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  React.useEffect(() => {}, []);
  console.log(cartItems, 'cartItems');
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Header
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
              scrolling={scrolling}
              countCartItems={cartItems.length}
            />
          }
        >
          <Route index element={<Register />} />
          <Route path="home" element={<Homepage />} />
          <Route
            path="/product"
            element={<Product onAdd={onAdd} />}
          />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
