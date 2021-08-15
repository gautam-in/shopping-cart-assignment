import Page from '../components/Page';
import '../components/styles/css/root.css';
import { AppStateProvider } from '../lib/store';

export default function MyApp({ Component, pageProps }) {
  return (
    <AppStateProvider>
      <Page>
        <Component {...pageProps} />
      </Page>
    </AppStateProvider>
  );
}
