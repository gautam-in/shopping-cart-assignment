import { GlobalStyles } from "../styles/GlobalStyle";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import store from "./../Redux/reducers/store";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
