import NavigationBar from "../../common/components/shared/NavigationBar";
import CartDetail from "../template/CartDetail";
import style from "./Layout.module.scss";
import Footer from "../../common/components/shared/Footer";
import { useStore } from "../../common/context/productActions";
import { useRouter } from "next/router";
const Layout = ({ children }) => {
  const { items, total, totalquantity, user, cartOpen, setCloseCart } =
    useStore();
  const router = useRouter();

  return (
    <>
      <div className={style.Layout_Container}>
        <NavigationBar />
        <div
          className={
            cartOpen
              ? style.Content_Container_openCart
              : style.Content_Container
          }
        >
          {children}
          <CartDetail />
          <div
            className={style.Overlay}
            onClick={setCloseCart}
            style={{ display: cartOpen ? "block" : "none" }}
          />
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Layout;
