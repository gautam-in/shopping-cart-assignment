import { useEffect } from 'react';
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
    <Container>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Container >
  )
}

export default MyApp
