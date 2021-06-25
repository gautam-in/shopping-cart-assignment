import { useDispatch } from "react-redux";
import { addToShipping, deleteFromShipping } from "../actions";
import CustomButton from "./CustomButton";
import CartItemStyle from "./styles/cartItemStyle";
export default function CartItem({ addedProduct }) {
  const dispatch = useDispatch();
  return (
    <CartItemStyle>
      <img src={addedProduct.imageURL} alt={addedProduct.name} />
      <div className="product-details">
        <h4>{addedProduct.name}</h4>
        <div className="product-quantity-details">
          <div className="product-quantity">
            <CustomButton
              classes={"counter-btn"}
              text={`-`}
              clickHandler={() => dispatch(deleteFromShipping(addedProduct))}
            ></CustomButton>
            <span>{addedProduct.quantity}</span>
            <CustomButton
              classes={"counter-btn"}
              text={`+`}
              clickHandler={() => dispatch(addToShipping(addedProduct))}
            ></CustomButton>
            <span style={{ fontSize: "1.5rem" }}>&times;</span>
            <span>{addedProduct.price}</span>
          </div>
          <p>Rs. {addedProduct.totalPrice}</p>
        </div>
      </div>
    </CartItemStyle>
  );
}
