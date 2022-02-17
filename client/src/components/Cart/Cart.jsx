import CartModal from "../CartModal/CartModal";
import Image from "../UI Components/Image/Image";
import Modal from "../UI Components/Modal/Modal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { HANDLE_CART } from "../../constants/storeActions/storeActions";
import classes from "./Cart.module.css";

const Cart = () => {
  const {
    cart: { cartOpen, count },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  const itemCount = count === 1 ? `${count} item` : `${count} items`;
  const handleOnClick = () => {
    dispatch({ type: HANDLE_CART, cartOpen: !cartOpen });
  };
  return (
    <>
      <div
        className={classes.wrapper}
        onClick={() => {
          handleOnClick();
        }}
        tabIndex={0}
      >
        <Image
          source={"static/images/cart.svg"}
          className={classes.image}
          alt={"Cart Image"}
        />
        <p className={classes.items}>{itemCount}</p>
      </div>
      {cartOpen ? (
        <Modal>
          <CartModal cartOpen={cartOpen} />
        </Modal>
      ) : (
        ""
      )}
    </>
  );
};

export default Cart;
