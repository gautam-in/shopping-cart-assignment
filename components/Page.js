import Nav from "./Nav";
import GlobalStyles from "../components/styles/GlobalStyles";
import Footer from "./Footer";
export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Nav />
      <div className="container-body">{children}</div>
      <Footer />
    </div>
  );
}
