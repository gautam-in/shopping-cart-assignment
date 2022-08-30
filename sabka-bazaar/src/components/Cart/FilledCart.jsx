import PropTypes from "prop-types";
import { Button } from "../Button/Button";
import "./cart.styles.scss";
const CartItem = ({ name, imageURL, price, quantity }) => {
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
            <Button title="+" type="circularBtn" />
            <span className="quantity">{quantity}</span>
            <Button title="-" type="circularBtn" />{" "}
            <span className="quantity">x</span> Rs.{price}
          </div>
        </div>

        <div className="cart-item-total">{quantity * price}</div>
      </div>
    </div>
  );
};
export const FilledCart = ({ cartItems }) => {
  return (
    <div className="cart-items-list">
      {cartItems.map(({ name, id, imageURL, price, quantity }) => {
        return (
          <CartItem
            key={id}
            name={name}
            imageURL={imageURL}
            price={price}
            quantity={quantity}
          />
        );
      })}
    </div>
  );
};

CartItem.propTypes = {
  name: PropTypes.string,
  imageURL: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
};

FilledCart.propTypes = {
  cartItems: PropTypes.array,
};
