import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Routes from '../Routes';
import './Layout.scss';

const Layout = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes />
        <Footer />
      </Router>
    </>
  );
};

export default Layout;
