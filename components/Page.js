import Header from "./Header";
import Footer from "./Footer";
import {InnerStyle,GlobalStyles} from "./styles/GlobalStyle";


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
