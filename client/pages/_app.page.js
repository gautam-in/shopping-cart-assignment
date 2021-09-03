import Head from "next/head";
import Header from "../components/molecules/Header";
import Footer from "../components/molecules/Footer";
import GlobalStyles from "../global/styles/global.styles";
import { CartStateProvider } from "../global/utils/useCart";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Sabka Bazaar | Online Grocery Store: Buy Online Grocery from India's
          Best Online Supermarket
        </title>
      </Head>
      <GlobalStyles />
      <CartStateProvider>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
      </CartStateProvider>
      <Footer />
    </>
  );
}

export default MyApp;
