import Router from "next/router";
import Page from "../components/Page";
import nProgress from "nprogress";
import "../components/styles/nprogress.css";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import { StoreProvider } from "../store/Store";
import rootReducer, { initialState } from "../reducers/rootReducer";

Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider initialState={initialState} reducer={rootReducer}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </StoreProvider>
  );
}

export default MyApp;
