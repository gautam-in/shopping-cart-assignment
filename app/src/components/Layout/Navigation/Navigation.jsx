import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Navigation.module.css";
import { CartContext } from "../../../contexts/Cart.context";
import Modal from "../../common/Modal";
import CartBody from "../../Cart/Cart-body";
import CartIcon from "./cart-icon";

const Navigation = (props) => {
  const cart = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);

  const itemCount = cart.cartProducts.reduce(
    (out, curElem) => out + curElem.quantity,
    0
  );

  return (
    <div className={style.mainContainer}>
      <div className={style.signinContainer}>
        <Link className={style.signinLink} to="/signin">
          SignIn
        </Link>
        <Link className={style.signinLink} to="/register">
          Register
        </Link>
      </div>
      <nav className={style.NavigationContainer}>
        <Link to="/">
          <img
            className={style.logoStyle}
            src={"/static/images/logo.png"}
            alt="Sabka bazaar Logo"
          />
        </Link>
        <span>
          <Link className={style.navItem} to="/">
            Home
          </Link>
          <Link className={style.navItem} to="/products">
            Products
          </Link>
        </span>
      </nav>

      <CartIcon
        setShowModal={setShowModal}
        showModal={showModal}
        itemCount={itemCount}
      />

      <Modal
        showModal={showModal}
        title={`My Cart  (${itemCount} items)`}
        closeModalHandler={() => setShowModal(!showModal)}
      >
        <CartBody buttonStyle setShowModal={setShowModal} />
      </Modal>
    </div>
  );
};
export default Navigation;
