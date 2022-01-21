import { useContext } from "react";
import CartContext from "../../Context/CartContext/CartContext";
import CartTabletView from "../CartTabletView/CartTabletView";
import Button from "../UI Components/Button/Button";
import "./CartModal.scss";

const CartModal = ({ cartOpen }) => {
  const {
    cart: { count, products },
    dispatch,
  } = useContext(CartContext);
  const countItems = count === 1 ? `${count} item` : `${count} items`;

  return (
    <section className="cartmodal__section">
      <div className="cartmodal__section__heading">
        <h1 className="cartmodal__section__heading__title">
          My Cart ({countItems})
        </h1>
        <Button
          className={"cartmodal__section__heading__button"}
          onClick={() => dispatch({ type: "HANDLE_CART", cartOpen: !cartOpen })}
        >
          &#10005;
        </Button>
      </div>
      <CartTabletView
        className={"cartmodal__section__flex"}
        count={count}
        products={products}
      />
    </section>
  );
};

export default CartModal;
