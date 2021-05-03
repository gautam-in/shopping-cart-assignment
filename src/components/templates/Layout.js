import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import CartDrawer from '../organisms/CartDrawer';
import Routes from './Routes';
import '../../styles/_global.scss';

const Layout = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toogleCartDrawer = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <Router>
      <Header toogleCart={toogleCartDrawer} />
      <CartDrawer isOpen={isCartOpen} toogleCart={toogleCartDrawer} />
      <Routes />
      <Footer />
    </Router>
  );
};

export default Layout;
