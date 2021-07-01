import '../styles/globals.css';
import Page from '../app/containers/Page';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { store } from '../store/store';

function MyApp({ Component, pageProps  }) {
  return (
     <Provider store={store}>
      <Page>
        <Component {...pageProps} />
      </Page>
     </Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.any,
};
export default MyApp;
//export default wrapper.withRedux(MyApp);
