import { useEffect } from 'react';
import { Helmet } from "react-helmet";
import Container from 'react-bootstrap/Container';

import Layout from '../components/Layout'
import { createDB, } from '../lib/indexDB';
import '../styles/globals.scss'


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== undefined) {
      createDB()
    }
  }, [])

  return (
    <>
      <Helmet>
        <html lang="en" ></html>
      </Helmet>
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    </>

  )
}

export default MyApp
