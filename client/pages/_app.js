import { createContext, useEffect } from 'react';
import { Helmet } from "react-helmet";
import Container from 'react-bootstrap/Container';

import Layout from '../components/Layout'
import { createDB, } from '../lib/indexDB';
import '../styles/globals.scss'
import { AppContext } from '../Context/cart-context';
import CartState from '../Context/cart-state';


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== undefined) {
      createDB()
    }
  }, [])

  return (
    <CartState>
      <Helmet>
        <html lang="en" ></html>
      </Helmet>
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
      <footer>
        <p>Copyright 2011-2018 Sabka Bazaar Grocery Supplies Pvt.</p>
      </footer>
    </CartState>
  )
}

export default MyApp
