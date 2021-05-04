import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '../molecules/Header';
import Footer from '../molecules/Footer';
import CartDrawer from '../molecules/CartDrawer';
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
