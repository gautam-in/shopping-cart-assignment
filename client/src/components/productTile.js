import { useContext, useState } from "react";
import CartContext from "./../library/contexts/cartContext";
import {
  Title,
  ProductTileStyles,
  ProductInfo,
  PaymentSection,
  PaymentSectionForMobilesandTablets,
} from "../styles/ProductTileStyles.js";
import request from "./../library/utlis/request";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductTile({ name, description, price, imageURL, ...productInfo }) {
  const { addToCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const onBuyNowClick = () => {
    setLoading(true);
    request("addToCart").then((res) => {
      setLoading(false);
      toast("Added to Cart Successfully!!", {
        autoClose: 3000,
        type: toast.TYPE.SUCCESS,
      });
      addToCart({ name, description, price, imageURL, ...productInfo });
    });
  };
  return (
    <ProductTileStyles>
      <Title>{name}</Title>
      <ProductInfo>
        <img src={imageURL} alt={name} />
        <p>{description}</p>
      </ProductInfo>
      <PaymentSection>
        <h5 className="price">MRP Rs.{price}</h5>
        <button onClick={onBuyNowClick}>
          {loading ? "Adding to cart..." : "Buy Now"}
        </button>
      </PaymentSection>
      <PaymentSectionForMobilesandTablets onClick={onBuyNowClick}>
        {loading ? "Adding to cart..." : `Buy Now @Rs.${price}`}
      </PaymentSectionForMobilesandTablets>
      <ToastContainer />
    </ProductTileStyles>
  );
}

export default ProductTile;
