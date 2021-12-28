import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import Cart from './components/Cart/Cart';

const Views = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const App = () => {
  const showCart = useSelector(state => state.cart.showCart);
  console.log(showCart)
  return (
    <div>
      <Header />
      <Views>
        {/* <HomePage /> */}
        <ProductsPage />
        {/* <LoginPage /> */}
        {/* <RegisterPage /> */}
        {showCart && <Cart />}
      </Views>
      <Footer />
    </div>
  );
}

export default App;
