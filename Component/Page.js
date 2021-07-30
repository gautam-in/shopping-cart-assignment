import Footer from "./Footer";
import Header from "./Header";
import { GlobalStyles, InnerStyle } from "./styles/GlobalStyle";

export default function Page({ children }) {
  return (
    <>
      <GlobalStyles />
        <Header />
        <InnerStyle>{children}</InnerStyle>
        <Footer />
    </>
  );
}
