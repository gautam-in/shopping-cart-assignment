import "../styles/globals.css";
import Head from "../components/common/Head";
import Layout from "../components/common/Layout";
import { StoreProvider } from "../public/store";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <StoreProvider>
        <Head />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StoreProvider>
    </>
  );
}

export default MyApp;
