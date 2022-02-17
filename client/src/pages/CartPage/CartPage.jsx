import { useSelector } from "react-redux";
import CartTableView from "../../components/CartTableView/CartTableView";
import classes from "./CartPage.module.css";

const CartPage = () => {
  const {
    cart: { count, products },
  } = useSelector((state) => state);

  const countItems = count === 1 ? `${count} item` : `${count} items`;
  return (
    <main className={classes.cartpage}>
      <h1 className={classes.cartpage__title}>My Cart ({countItems})</h1>
      <CartTableView count={count} products={products} />
    </main>
  );
};

export default CartPage;
