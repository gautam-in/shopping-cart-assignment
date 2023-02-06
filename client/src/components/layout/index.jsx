import Footer from "./Footer";
import Header from "./Header";
import styles from "./Layout.module.scss";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.layout}>{children}</main>
      <Footer />
    </>
  );
}
