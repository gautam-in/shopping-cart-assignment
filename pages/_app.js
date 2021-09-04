import { GlobalStyles } from "../styles/GlobalStyle";
import LayoutComponent from "../components/LayoutComponent";

import { Provider } from "react-redux";
import store from "./../Redux/reducers/store";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <GlobalStyles />
        <LayoutComponent>
          <Component {...pageProps} />
        </LayoutComponent>
      </Provider>
    </>
  );
}

export default MyApp;
