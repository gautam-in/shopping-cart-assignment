/* Wrapper Page for all the pages */
import Head from 'next/head';
import { Container } from './styles/Container';
import { GlobalStyles } from './styles/GlobalStyles';
import { Main } from './styles/MainStyle';
import Header from './Header';
import Footer from './Footer';
import Cart from './Cart';

export default function Page({ children }) {
  return (
    <Container>
      <Head>
        <link rel="shortcut icon" href="/static/favicon.png" />
        <meta
          name="description"
          content="Sabka Bazaar Online Grocery Store gets you best deals on Grocery"
        />
      </Head>
      <GlobalStyles />
      <Header />
      <Main>
        <Cart />
        {children}
      </Main>

      <Footer />
    </Container>
  );
}
