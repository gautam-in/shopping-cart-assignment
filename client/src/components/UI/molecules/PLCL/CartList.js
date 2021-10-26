// import "../organisms/Cart/Cart.scss";
import "../../organisms/Cart/Cart.scss";

import { useDispatch } from "react-redux";
import {
  createAddToCartSuccess,
  removeFromCart,
} from "../../../../redux/actions/cartAction";

const CartList = ({ data }) => {
  const dispatch = useDispatch();

  const handleIncrementItemQty = (product) => {
    dispatch(createAddToCartSuccess(product));
  };

  const handleDecrementItemQty = (product) => {
    dispatch(removeFromCart(product));
  };

  const CartData =
    data &&
    data.map((cartProduct) => {
      const { id, name, imageURL, price, count } = cartProduct;
      return (
        <li key={id} className="cart-item-wrap">
          <div className="cart-item-main">
            <div className="cart-image-wrap">
              <img src={imageURL} alt={name} />
            </div>
            <div className="cart-item-details-wrap">
              <h5>{name}</h5>
              <div>
                <span>
                  <button
                    type="button"
                    className="circle-btn"
                    onClick={() => handleDecrementItemQty(cartProduct)}
                  >
                    -
                  </button>
                  {count}
                  <button
                    type="button"
                    className="circle-btn"
                    onClick={() => handleIncrementItemQty(cartProduct)}
                  >
                    +
                  </button>
                </span>
                <span>X{price}</span>
              </div>
            </div>
          </div>
        </li>
      );
    });
  return (
    <div className="cart-list-wrap">
      <ul style={{ padding: "0" }}>{CartData}</ul>
    </div>
  );
};
export default CartList;
