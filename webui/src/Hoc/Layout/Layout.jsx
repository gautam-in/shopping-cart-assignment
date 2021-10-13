import css from "./Layout.module.css";
import Nav from "../../Component/Nav/Header";
import Footer from "../../Component/Nav/Footer";
import Cart from "../../Component/Cart/Cart";
function Layout({ children }) {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main className={"wrapper " + css.Main}>
        <Cart/>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
export default Layout;
