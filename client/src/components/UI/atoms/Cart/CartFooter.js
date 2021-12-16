import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import "../../organisms/Cart/Cart.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CartFooter = ({ cartSideNav, data }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const itemCount = useSelector((state) => state.cartReducer.cartItem);

  useEffect(() => {
    var total =
      data &&
      data.reduce((acc, item) => {
        return acc + item.count * item.price;
      }, 0);
    setTotalPrice(total);
  }, [itemCount]);
  return (
    <div className="sidebar-cart-footer-wrap">
      <button type="button" onClick={cartSideNav}>
        <span className="checkout-text-wrap">Proceed to checkout</span>
        <span className="checkout-price-wrap">
          RS.{totalPrice} <FontAwesomeIcon icon={faGreaterThan} />{" "}
        </span>
      </button>
    </div>
  );
};
export default CartFooter;
