import Page from "../Component/Page";
import Head from "next/head";
import { CartContextProvider } from "../context/CartContext";
import { LoginContextProvider } from "../context/LoginContext";
const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Sabka Dukan</title>
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