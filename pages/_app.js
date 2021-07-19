import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import BaseLayout from "../src/containers/BaseLayout";
import store from "../src/redux/store/store";
import GlobalStyle from "../src/styles/globalStyles";


export default function MyApp({ Component, pageProps }) {
  console.log("_app.js");
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BaseLayout>
          <GlobalStyle />
          <Component {...pageProps} />
        </BaseLayout>
      </Provider>
    </QueryClientProvider>
  );
}
