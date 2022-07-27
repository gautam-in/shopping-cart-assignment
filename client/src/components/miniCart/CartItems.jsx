import { useContext } from "react";
import { ShopContext } from "../../contexts/shoppingContext";
import { Button } from "react-bootstrap";
const CartItems = ({ cartItem }) => {
  console.log("cartItem in mini cart", cartItem);
  const { addItemToCart, removeItemFromCart } = useContext(ShopContext);
  return (
    <div className="cart-container">
      <img
        className="cartitem-product-img"
        src={cartItem.imageURL}
        width="60"
        height="70"
      />
      <div className="cartitem-item-details">
        <h6 className="cartitem-product-name">{cartItem.name}</h6>
        <div className="cartitem-product-quantity">
          <div>
            <Button
              className="cartitem-qty-btn"
              size="sm"
              onClick={() => removeItemFromCart(cartItem)}
            >
              -
            </Button>
            <span>{cartItem.quantity}</span>
            <Button
              className="cartitem-qty-btn"
              size="sm"
              onClick={() => addItemToCart(cartItem)}
            >
              +
            </Button>
            {`x Rs.${cartItem.price}`}
          </div>

          <span>{`Rs.${cartItem.price}`}</span>
        </div>
      </div>
    </div>
  );
};
export default CartItems;
