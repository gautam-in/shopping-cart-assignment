import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import PageLayout from '../components/templates'
import store from '../redux/store'
import GlobalStyle from '../styles/GlobalStyle'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <GlobalStyle />
        <PageLayout user={pageProps.user}> 
          <Component {...pageProps} />
        </PageLayout>
    </Provider>
  )
}


const makeStore = () => store;

export default withRedux(makeStore)(MyApp)
