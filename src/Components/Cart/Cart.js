import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import CartContext from "../../Context/CartContext/CartContext";
import useMediaQuery from "../../util/Customhook/useMediaQuery";
import CartModal from "../CartModal/CartModal";
import Image from "../UI Components/Image/Image";
import Modal from "../UI Components/Modal/Modal";
import "./Cart.scss";

const Cart = () => {
  const {
    cart: { cartOpen, count },
    dispatch,
  } = useContext(CartContext);
  const itemCount = count === 1 ? `${count} item` : `${count} items`;
  const navigate = useNavigate();
  const match = useMediaQuery("(min-width: 768px)");
  const handleOnClick = () => {
    match
      ? dispatch({ type: "HANDLE_CART", cartOpen: !cartOpen })
      : navigate("/cart");
  };
  return (
    <>
      <div
        className="wrapper"
        onClick={() => {
          handleOnClick();
        }}
        tabIndex={0}
      >
        <Image
          source={"/images/cart.svg"}
          className={"image"}
          alt={"Cart Image"}
        />
        <p className="items">{itemCount}</p>
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
