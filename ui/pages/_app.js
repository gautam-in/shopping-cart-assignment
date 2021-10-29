import Nav from '../components/Nav'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { CookiesProvider } from "react-cookie"
import {CartContext} from '../components/UseContext'
import { useState } from 'react';
import { getCookie } from 'cookies-next';

function MyApp({ Component, pageProps }) {
  const [value, setValue] = useState(getCookie("cartItems")?JSON.parse(getCookie("cartItems")):[]);
  return (
    <CartContext.Provider value={{value, setValue}}>
    <CookiesProvider>
      <Nav/>
      <div className="mainBody">
      <Component {...pageProps} /><br/>
      </div>
      <footer className={styles.footer}>
          ©Copyright @ 2020-2021 Sabka Bazaar Grocery Suppliers pvt. ltd.
      </footer>
    </CookiesProvider>
    </CartContext.Provider>
  )
}

export default MyApp
