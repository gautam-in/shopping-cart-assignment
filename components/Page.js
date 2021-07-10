/* Wrapper Page for all the pages */
import { Container } from './styles/Container';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './Header';

export default function Page({ children }) {
  return (
    <Container>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
    </Container>
  );
}
