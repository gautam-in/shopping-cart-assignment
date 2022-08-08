import { useContext } from "react";
import { ShopContext } from "../../contexts/shoppingContext";
import { Button } from "react-bootstrap";
const CartItems = ({ cartItem }) => {
  const { imageURL, name, quantity, price } = cartItem;
  const totalPricePerItem = price * quantity;
  const { addItemToCart, removeItemFromCart } = useContext(ShopContext);
  return (
    <div className="cart-container">
      <img
        className="cartitem-product-img"
        src={imageURL}
        width="60"
        height="70"
      />
      <div className="cartitem-item-details">
        <h6 className="cartitem-product-name">{name}</h6>
        <div className="cartitem-product-quantity">
          <div>
            <Button
              className="cartitem-qty-btn"
              size="sm"
              onClick={() => removeItemFromCart(cartItem)}
            >
              -
            </Button>
            <span>{quantity}</span>
            <Button
              className="cartitem-qty-btn"
              size="sm"
              onClick={() => addItemToCart(cartItem)}
            >
              +
            </Button>
            {`x Rs.${price}`}
          </div>

          <span>{`Rs.${totalPricePerItem}`}</span>
        </div>
      </div>
    </div>
  );
};
export default CartItems;
