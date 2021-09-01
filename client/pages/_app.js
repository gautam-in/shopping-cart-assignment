import Header from "../components/molecules/Header";
import Footer from "../components/molecules/Footer";
import GlobalStyles from "../global/styles/global.styles";
import { CartStateProvider } from "../global/utils/useCart";

function MyApp({ Component, pageProps }) {
  return (
    <>
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
