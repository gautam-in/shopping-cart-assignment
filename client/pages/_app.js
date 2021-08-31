import Header from "../components/molecules/Header";
import Footer from "../components/molecules/Footer";
import GlobalStyles from "../global/styles/global";
import SectionWrapper from "../components/atoms/SectionWrapper";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <SectionWrapper>
          <Component {...pageProps} />
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
