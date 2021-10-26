import Navbar from "../Navbar";
import CartView from "../../cart/CartView";
import style from "../Layout/layout.module.css";
import { useStore } from "../../../public/store";
import { useRouter } from "next/router";
const Layout = ({ children }) => {
  const { items, total, totalquantity, user, cartOpen } = useStore();
  const router = useRouter();
  return (
    <>
      <div className={style.Layout_Container}>
        <Navbar />
        <div
          className={
            cartOpen
              ? style.Content_Container_openCart
              : style.Content_Container
          }
        >
          {children}
          <CartView />
        </div>
      </div>
    </>
  );
};
export default Layout;
