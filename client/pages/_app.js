import Header from "../components/molecules/Header";
import Footer from "../components/molecules/Footer";
import GlobalStyles from "../global/styles/global";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
