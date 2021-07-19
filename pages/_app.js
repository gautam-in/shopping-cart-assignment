import Page from "../components/organism/Page";
import { CartContextProvider } from "../context/CartContext";
import { LoginContextProvider } from "../context/LoginContext";
import Head from "next/head";
import "../components/styles/CommonStyle.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Shopping Cart</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <LoginContextProvider>
        <CartContextProvider>
          <Page>
            <Component {...pageProps} />
          </Page>
        </CartContextProvider>
      </LoginContextProvider>
    </>
  );
}

export default MyApp;
