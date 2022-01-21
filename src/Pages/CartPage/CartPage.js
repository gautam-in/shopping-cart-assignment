import { useContext } from "react";
import CartTabletView from "../../Components/CartTabletView/CartTabletView";
import CartContext from "../../Context/CartContext/CartContext";
import "./CartPage.scss";

const CartPage = () => {
  const {
    cart: { count, products },
  } = useContext(CartContext);

  const countItems = count === 1 ? `${count} item` : `${count} items`;
  return (
    <main className="cartpage">
      <h1 className="cartpage__title">My Cart ({countItems})</h1>
      <CartTabletView count={count} products={products} />
    </main>
  );
};

export default CartPage;
