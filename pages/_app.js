import Head from 'next/head';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import { CommonStoreProvider } from '../Store/CommonStore';
import '../styles/_base.scss';
export default function MyApp({ Component, pageProps }) {
    return (
        <>
        <Head>
         <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        
        </Head>
        <CommonStoreProvider>
        <Header ></Header>
        <Component {...pageProps} />
        <Footer></Footer>
        </CommonStoreProvider>
        </>
    )
  }