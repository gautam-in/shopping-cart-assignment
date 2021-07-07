import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import { CartContextProvider } from '../components/Cart/CartContext';
import { TokenProvider } from '../components/TokenContext';
import { CartStateProvider } from '../components/Cart/CartStateContext';

function MyApp({ Component, pageProps }) {
  return (
    <CartStateProvider>
      <TokenProvider>
        <CartContextProvider>
          <Component {...pageProps} />
        </CartContextProvider>
      </TokenProvider>
    </CartStateProvider>
  )
}

export default MyApp
