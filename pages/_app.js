import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import PageLayout from '../components/templates'
import store from '../redux/store'
import GlobalStyle from '../styles/GlobalStyle'
import Theme from '../theme/theme'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Provider store={store}>
      <GlobalStyle />
        <Theme>
          <PageLayout user={pageProps.user}> 
            <Component {...pageProps} />
          </PageLayout>
        </Theme>
    </Provider>
    </>
  )
}


const makeStore = () => store;

export default withRedux(makeStore)(MyApp)
