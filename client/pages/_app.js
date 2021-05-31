
import Layout from '../components/Layout/Layout'
import '../styles/globals.css'
import { CartStateProvider } from '../util/cartState'


function MyApp({ Component, pageProps }) {

  return (

    <CartStateProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartStateProvider>

  )
}

export default MyApp
