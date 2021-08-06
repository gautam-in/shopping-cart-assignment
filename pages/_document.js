import Document, { Html,Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

import GlobalStyle from '../styles/GlobalStyle'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <Html lang="en-us">
        <Head>
        <title>Shopping Cart</title>   
        <meta charset="UTF-8" />
        <meta property="og:title" content="My page title" key="title" />
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="John Doe" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}