import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Loader from '../Loader';

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
    <Loader />
  </>
);

export default Layout;
