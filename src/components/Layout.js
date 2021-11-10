import React from 'react';
import Header from './shared/header';
import Footer from './shared/footer';

import { Helmet } from 'react-helmet-async';

// import 'bootswatch/dist/lux/bootstrap.css';

const Layout = ({title, description, children}) => {
  return ( 
    <>
      <Helmet>
        <title>Sabhka Bazaar</title>
        <meta name = "description" content={ description || 'Sabhka Bazaar' } />
      </Helmet>      
      <main className="container">
        <Header/>
        {children}
      </main>
      <Footer/>
    </>
  );
};
 
export default Layout;