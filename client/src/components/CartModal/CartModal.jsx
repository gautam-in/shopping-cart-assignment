import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import CartTableView from "../CartTableView/CartTableView";
import Button from "../UI Components/Button/Button";
import { handleCart } from "../../store/cartReducer/cartActions";
import classes from "./CartModal.module.css";

const CartModal = ({ cartOpen }) => {
  const {
    cart: { count, products },
  } = useSelector((state) => state);

  const dispatch = useDispatch();
  const countItems = count === 1 ? `${count} item` : `${count} items`;

  return (
    <section className={classes.cartmodal__section}>
      <div className={classes.cartmodal__section__heading}>
        <h1 className={classes.cartmodal__section__heading__title}>
          My Cart ({countItems})
        </h1>
        <Button
          className={classes.cartmodal__section__heading__button}
          onClick={() => dispatch(handleCart(cartOpen))}
        >
          &#10005;
        </Button>
      </div>
      <CartTableView
        className={classes.cartmodal__section__flex}
        count={count}
        products={products}
      />
    </section>
  );
};

export default CartModal;
