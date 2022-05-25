import { ReactComponent as Delete } from "../Assets/svg/remove_white_24dp.svg";
import { ReactComponent as Add } from "../Assets/svg/add_white_24dp.svg";
import { addItemToCart, removeItemFromCart } from "../redux/features/appSlice";
import { useDispatch } from "react-redux";
import "../styles/cart-items.scss";

const CartItems = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { name, quantity, imageURL, price } = cartItem;

  const handleRemoveCart = () => {
    console.log("handleRemoveCart");
    dispatch(removeItemFromCart(cartItem));
  };

  const handleAddCart = () => {
    console.log("addItemToCart");
    dispatch(addItemToCart(cartItem));
  };
  return (
    <div className="cart-item-container">
      <img src={require(`../../src${imageURL}`)} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <div className="item-detail">
          <div className="details">
            <Delete onClick={handleRemoveCart} className="operator" />
            <span className="price">{quantity}</span>
            <Add onClick={handleAddCart} className="operator" />
            <span>&#10005;</span>
            <span className="price">Rs.{price}</span>
          </div>
          <div className="item-price">Rs.{quantity * price}</div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
