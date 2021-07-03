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

MyApp.getInitialProps = async function ({ Component, ctx }) {
  console.log("ankur sharma..............................",Component)
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

const makeStore = () => store;

export default withRedux(makeStore)(MyApp)
