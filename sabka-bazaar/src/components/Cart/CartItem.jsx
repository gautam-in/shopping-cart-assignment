import PropTypes from "prop-types";
import { Button } from "../Button/Button";

export const CartItem = ({
  name,
  imageURL,
  price,
  quantity,
  id,
  incrementQuantity,
  decrementQuantity,
}) => {
  return (
    <div className="cart-item-container">
      <div className="cart-item-img-container">
        <img
          className="cart-item-img"
          src={imageURL}
          alt={name}
          width="60"
          height="60"
        />
      </div>
      <div className="cart-item-info">
        <div className="cart-item-desc">
          <div className="cart-item-name">{name}</div>
          <div>
            <Button
              title="-"
              type="circularBtn"
              onClick={() => decrementQuantity(id)}
            />
            <span className="quantity">{quantity}</span>
            <Button
              title="+"
              type="circularBtn"
              onClick={() => incrementQuantity(id)}
            />
            <span className="quantity">x</span> Rs.{price}
          </div>
        </div>

        <div className="cart-item-total">Rs.{quantity * price}</div>
      </div>
    </div>
  );
};
CartItem.propTypes = {
  name: PropTypes.string,
  imageURL: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  id: PropTypes.string,
  incrementQuantity: PropTypes.func,
  decrementQuantity: PropTypes.func,
};
