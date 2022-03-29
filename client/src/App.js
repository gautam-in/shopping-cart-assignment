// react
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// components
import Header from './components/layout/Header';
import Home from './views/Home';
import Products from './views/Products';
import Login from './views/Login';
import SignUp from './views/SignUp';
import Footer from './components/layout/Footer';
import Cart from './views/Cart';

// scss
import './scss/all.scss';

const App = () => {
  // states
  const [showCart, setShowCart] = useState(false);
  const [cartData, setCartData] = useState([]);

  /**
   * @name buyButtonHandler
   * @param {object} cartItem This tells about product needed to be added on cart
   * @param {boolean} isProductQuantityBeingDecreased This flag tells whether the add or remove Item button is clicked on Cart Page
   * @description Add products to cart on buy button click of Product Page
   */
  const buyButtonHandler = (cartItem, isProductQuantityBeingDecreased = false) => {
    const existingProductIndex = cartData.findIndex((data) => data.id === cartItem.id);
    if (existingProductIndex > -1) {
      let cartProducts = JSON.parse(JSON.stringify(cartData));
      if (isProductQuantityBeingDecreased) {
        cartProducts = decreaseProductQuantity(cartProducts, existingProductIndex);
      } else {
        cartProducts = increaseProductQuantity(cartProducts, existingProductIndex);
      }
      setCartData(cartProducts);
    } else {
      addProductsToCart(cartItem);
    }
  };

  const addProductsToCart = (cartItem) => {
    fetch('http://localhost:8000/api/addProductsToCart', {
      method: 'POST',
      body: JSON.stringify({ id: cartItem.id })
    })
      .then((response) => response)
      .then((res) => {
        if (res.statusText === 'OK') {
          setCartData((prevState) => [...prevState, cartItem]);
        }
      })
      .catch((err) => console.error(err));
  };

  /**
   * @name decreaseProductQuantity
   * @param {array} products This contains data about existing cart products
   * @param {boolean} existingProductIndex Index of product that needed to be decreased in quantity
   * @description This function decreases the quantity of a product
   * @return cart product data with updated quantity
   */
  const decreaseProductQuantity = (products, existingProductIndex) => {
    if (products[existingProductIndex].noOfPeices - 1 !== 0) {
      products[existingProductIndex].noOfPeices = products[existingProductIndex].noOfPeices - 1;
    } else {
      products.splice(existingProductIndex, 1);
    }
    return products;
  };

  /**
   * @name increaseProductQuantity
   * @param {array} products This contains data about existing cart products
   * @param {boolean} existingProductIndex Index of product that needed to be increased in quantity
   * @description This function increases the quantity of a product
   * @return cart product data with updated quantity
   */
  const increaseProductQuantity = (products, existingProductIndex) => {
    products[existingProductIndex].noOfPeices = products[existingProductIndex].noOfPeices + 1;
    return products;
  };

  return (
    <div className="App">
      <Cart
        data={cartData}
        showCart={showCart}
        setShowCart={setShowCart}
        buyButtonHandler={buyButtonHandler}
      />
      <Header showCart={showCart} setShowCart={setShowCart} cartData={cartData} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products/" element={<Products buyButtonHandler={buyButtonHandler} />} />
        <Route path="/products/:name" element={<Products buyButtonHandler={buyButtonHandler} />} />
      </Routes>
      <Footer />
      {/* <Route path="*" element={<NoPage />} /> */}
    </div>
  );
};

export default App;
