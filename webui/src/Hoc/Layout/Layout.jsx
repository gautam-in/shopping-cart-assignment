import css from "./Layout.module.css";
import Nav from "../../Component/Nav/Header";
import Footer from "../../Component/Nav/Footer";
function Layout({ children }) {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main className={"wrapper " + css.Main}>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
export default Layout;
