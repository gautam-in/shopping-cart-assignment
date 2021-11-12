import "../styles/globals.scss";

import Header from "../common/components/shared/Head";
import Layout from "../modules/layout";
import { StoreProvider } from "../common/context/contextProvider";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <StoreProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StoreProvider>
    </>
  );
}

export default MyApp;
