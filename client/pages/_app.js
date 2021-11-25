import '../styles/globals.css'
import '../styles/queries.css'

import MainPage from '../components/Page'
import { wrapper } from '../store/store'

function MyApp({ Component, pageProps }) {
  return (
    <MainPage>
        <Component {...pageProps} />
    </MainPage>
  )
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};

  if(Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;

  return { pageProps }
}

export default  wrapper.withRedux(MyApp)
