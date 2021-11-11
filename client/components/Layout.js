import { Container } from "../styles/GlobalStyle";
import Cart from "./Cart";
import Header from "./Header";
import Footer from "./Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useSelector } from "react-redux";
import {Router} from "next/router";
import Head from "next/head";
import nProgress from "nprogress";

export default function Layout({ children }) {
  Router.events.on("routeChangeStart", nProgress.start);
  Router.events.on("routeChangeError", nProgress.done);
  Router.events.on("routeChangeComplete", nProgress.done);

  return (
    <>
      <Head>
        <title>Sabka Bazaar</title>
        <link rel="shortcut icon" href="/static/favicon.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <meta
          name="description"
          content="Sabka Bazaar Online Grocery Store gets you best deals on Grocery"
        />
      </Head>
      <Header />
      <Container>{children}</Container>

      {useSelector((state) => state.cart.showCart) && <Cart />}

      <Footer />
      <ToastContainer  autoClose={2000} position="bottom-left" />
      
    </>
  );
}
