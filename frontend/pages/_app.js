import App from 'next/app';

import Layout from '../components/layout';

class ShoppingApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Layout>
        <Component {...pageProps}></Component>
      </Layout>
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
