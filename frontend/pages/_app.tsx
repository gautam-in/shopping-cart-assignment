import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {QueryClient, QueryClientProvider} from 'react-query'
import {CartWrapper} from '../components/Cart/CartContext'

const queryClient = new QueryClient()

function MyApp({Component, pageProps}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <CartWrapper>
        <Component {...pageProps} />
      </CartWrapper>
    </QueryClientProvider>
  )
}

export default MyApp
