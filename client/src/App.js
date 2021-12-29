import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import Cart from './components/Cart/Cart';

import { selectShowCart } from './redux/Cart/selectors';

const Views = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 3px;
  min-height: 90vh;
  max-height: 100%;

  // Tablets
  @media only screen 
  and (min-width : 768px) 
  and (max-width : 1024px) {
    width: 95%;
  }

  // Large screen mobiles
  @media only screen 
  and (min-width : 321px) 
  and (max-width : 480px) {
    min-height: 84vh;
    width: 95%;
  }
`;

const App = () => {
  const showCart = useSelector(selectShowCart);
  return (
    <div>
      <Header />
      <Views>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="products/:filterId" element={<ProductsPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        {showCart && <Cart />}
      </Views>
      <Footer />
    </div>
  );
}

export default App;
