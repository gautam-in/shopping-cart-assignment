import Document, { Head,Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';


export default class MyDocument extends Document {
  constructor(props) {
    super(props);

    this.state = {
      title: 'abc',
    };
  }

  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en-us">
       <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
       <Head>
       </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
