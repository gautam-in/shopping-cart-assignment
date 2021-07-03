import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import '../styles/globals.css'
import PageLayout from '../components/templates'
import store from '../redux/store'


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PageLayout> 
        <Component {...pageProps} />
      </PageLayout>
    </Provider>
  )
}


const makeStore = () => store;

export default withRedux(makeStore)(MyApp)
