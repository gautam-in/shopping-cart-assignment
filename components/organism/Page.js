import Header from "../molecules/Header";
import Footer from "../molecules/Footer";
import {InnerStyle,GlobalStyles} from "../styles/GlobalStyle";


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
