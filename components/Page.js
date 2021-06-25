import Header from "./Header";
import Footer from "./Footer";
import InnerStyle from "./styles/InnerStyle";

export default function Page({ children }) {
  return (
    <>
      <Header />
      <InnerStyle>{children}</InnerStyle>
      <Footer />
    </>
  );
}
