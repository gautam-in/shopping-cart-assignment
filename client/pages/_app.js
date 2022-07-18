import '../styles/globals.scss'
import Layout from "../components/layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Provider} from 'react-redux';
import store from "../store/index";
import "@fontsource/nunito"
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
      <>
          <Head>
              <link rel="preconnect" href="http://localhost:5000"></link>
          </Head>
      <Provider store={store}>
      <Layout> <Component {...pageProps} /></Layout>
    </Provider>
      </>
 );
}

export default MyApp;
