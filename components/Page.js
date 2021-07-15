/* Wrapper Page for all the pages */
import { Container } from './styles/Container';
import { GlobalStyles } from './styles/GlobalStyles';
import { Main } from './styles/MainStyle';
import Header from './Header';
import Footer from './Footer';

export default function Page({ children }) {
  return (
    <Container>
      <GlobalStyles />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
}
