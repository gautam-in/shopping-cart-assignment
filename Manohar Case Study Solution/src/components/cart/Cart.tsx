import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CheckScreenSize } from "../../actions/action";
import CartIcon from "../../cart.svg";
import CustomModal from "../modal/CustomModal";

const Cart = () => {
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  let totalQuantity = 0;
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    totalQuantity += cart[i].quantity;
    totalPrice += cart[i].totalPrice;
  }
  const [showModal, setShowModal] = useState(false);
  // console.log(showModal);

  let title = "";
  if (totalQuantity === 0) title = "My Cart";
  else if (totalQuantity > 1) title = `My Cart (${totalQuantity} items)`;
  else title = `My Cart (${totalQuantity} item)`;

  const onClose = () => {
    // console.log("clicked close");
    setShowModal(false);
    if (window.innerWidth < 599) dispatch(CheckScreenSize(false));
  };

  const openModal = () => {
    // console.log("clicked");
    setShowModal(true);
    if (window.innerWidth < 599) dispatch(CheckScreenSize(true));
  };
  // console.log(totalQuantity);
  return (
    <>
      <div className="cart" onClick={openModal}>
        <img src={CartIcon} alt="Cart" />
        <div className="cart-items"> {totalQuantity} item</div>
      </div>
      {showModal && (
        <CustomModal onClose={onClose} title={title} price={totalPrice} />
      )}
    </>
  );
};

export default Cart;
