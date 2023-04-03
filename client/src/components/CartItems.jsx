import { useContext } from "react";
import "../assets/styles/components/CartItems.scss";
import { CartContext } from "../context";

const CartItems = ({ item }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-item">
      <div className="cart-item-description">
        <div className="cart-item-image">
          <img src={item.imageURL} alt={item.name} />
        </div>

        <div className="cart-item-details">
          <div className="cart-item-name">{item.name}</div>

          <div>
            <button
              className="btn-rounded"
              onClick={() => removeFromCart(item)}
            >
              -
            </button>
            {item.cart}
            <button className="btn-rounded" onClick={() => addToCart(item)}>
              +
            </button>
            x Rs.{item.price}
          </div>
        </div>
      </div>

      <div className="cart-item-price">Rs.{item.price * item.cart}</div>
    </div>
  );
};

export default CartItems;
