import React from 'react';
import styled from 'styled-components';

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
  return (
    <div>
      <Header />
      <Views>
        {/* <HomePage /> */}
        {/* <ProductsPage /> */}
        {/* <Cart /> */}
        {/* <LoginPage /> */}
        <RegisterPage />
      </Views>
      <Footer />
    </div>
  );
}

export default App;
