import Button from "../../components/UI/Button/Button";
import { useDispatch } from "react-redux";
import { sendAddRequest } from "../../store/cart-actions";
import { cartActions } from "../../store/cartSlice";
import "./CartItem.scss";
const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  //console.log(product);
  const addToCartHandler = (product) => {
    dispatch(sendAddRequest(product));
  };
  const decreaseItemQty = (product) => {
    dispatch(cartActions.reduceQuantity({ id: product.id }));
  };
  return (
    <div className="cart-item-row">
      <img className="cart-img" src={product.imageUrl} alt={product.name} />
      <div className="product-details">
        <div>
          <div className="product-name">{product.name}</div>

          <div className="d-flex">
            <Button
              className="cart-butn"
              onClick={() => decreaseItemQty(product)}
            >
              -
            </Button>
            {product.quantity}
            <Button
              className="cart-butn"
              onClick={() => addToCartHandler(product)}
            >
              +
            </Button>{" "}
            x Rs.{product.price}
          </div>
        </div>
        <div className="item-total-price">Rs.{product.totalItemPrice}</div>
      </div>
    </div>
  );
};

export default CartItem;
