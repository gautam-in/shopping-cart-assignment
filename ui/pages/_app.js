import Nav from '../components/Nav'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { CookiesProvider } from "react-cookie"

function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <Nav/>
      <Component {...pageProps} /><br/>
      <footer className={styles.footer}>
          ©Copyright @ 2020-2021 Sabka Bazaar Grocery Suppliers pvt. ltd.
      </footer>
    </CookiesProvider>
  )
}

export default MyApp
