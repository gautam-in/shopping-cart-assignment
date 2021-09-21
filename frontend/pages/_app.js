import App from 'next/app';

import Layout from '../components/layout';
import '../styles/main.css';

import { CategoriesStateProvider } from 'utils/contexts/categories';
import { CartStateProvider } from 'utils/contexts/cart';

class ShoppingApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <CartStateProvider>
        <CategoriesStateProvider>
          <Layout>
            <Component {...pageProps}></Component>
          </Layout>
        </CategoriesStateProvider>
      </CartStateProvider>
    );
  }
}

ShoppingApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps();
  }

  pageProps.query = ctx.query;

  return { pageProps };
};

export default ShoppingApp;
