import CustomButton from "../atom/CustomButton";
import {
  CartItemStyle,
  ProductDetail,
  ProductQuantityDetail,
  ProductQuantity,
} from "../styles/cartItemStyle";
import { POST } from "../../Utils/helper";
import {
  ADD_TO_SHIPPING,
  DELETE_FROM_SHIPPING,
} from "../../context/actions/Constant";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function CartItem({ addedProduct }) {
  const { dispatch } = useContext(CartContext);
  const addToCart = async (product) => {
    const data = await POST("addToCart", product.id);
    if (data) {
      dispatch({ type: ADD_TO_SHIPPING, payload: product });
    }
  };

  const deleteFromCart = (product) => {
    dispatch({ type: DELETE_FROM_SHIPPING, payload: product });
  };
  return (
    <CartItemStyle>
      <img src={addedProduct.imageURL} alt={addedProduct.name} loading="lazy" />
      <ProductDetail>
        <h1>{addedProduct.name}</h1>
        <ProductQuantityDetail>
          <ProductQuantity>
            <CustomButton
              classes={"counter-btn"}
              clickHandler={() => deleteFromCart(addedProduct)}
            >{`-`}</CustomButton>
            <span>{addedProduct.quantity}</span>
            <CustomButton
              classes={"counter-btn"}
              clickHandler={() => addToCart(addedProduct)}
            >{`+`}</CustomButton>
            <span>&times;</span>
            <span>{addedProduct.price}</span>
          </ProductQuantity>
          <p>Rs. {addedProduct.totalPrice}</p>
        </ProductQuantityDetail>
      </ProductDetail>
    </CartItemStyle>
  );
}
