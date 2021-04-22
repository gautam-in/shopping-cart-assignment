import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import Routes from '../Routes';
import CartDrawer from '../CartDrawer';
import './Layout.scss';

const Layout = () => {
  const [isSlideOpen, setIsSlideOpen] = useState(false);
  const cartSlideOpen = () => {
    setIsSlideOpen(!isSlideOpen);
  };

  return (
    <>
      <Router>
        <Header cartSideNav={cartSlideOpen} />
        <>
          <CartDrawer isSlideOpen={isSlideOpen} cartSideNav={cartSlideOpen} />
          <Routes />
        </>
        <Footer />
      </Router>
    </>
  );
};

export default Layout;
