import App from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Header from "../components/header/Header";
import { AuthProvider } from "../auth";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    //Anything returned here can be access by the client
    return { pageProps: pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <AuthProvider>
        <Provider store={store}>
          <Header>
            <Component {...pageProps} />
          </Header>
        </Provider>
      </AuthProvider>
    );
  }
}
