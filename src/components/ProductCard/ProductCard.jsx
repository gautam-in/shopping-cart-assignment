import axios from "../../api/axios";
import React from "react";
import Button from "../Button/Button";
import "../ProductCard/ProductCard.scss";
import { useDispatch, useSelector } from "react-redux";
import { addItemsToCart } from "../../redux/actions/cartActions";
import { selectCartItems } from "../../redux/selectors/cardSelector";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleAddToCart = async () => {
    try {
      await axios.post("http://localhost:5000/addToCart").then((res) => {
        if (res.data.response === "Success") {
          dispatch(addItemsToCart(cartItems, product));
        }
      });
    } catch (error) {
      alert("Somithing went wrong");
      console.log("There is some error while buying this item", error.message);
    }
  };
  return (
    <div className="product-container">
      <div className="product-name">{product.name}</div>
      <div className="product-tablet">
        <div>
          <img className="product-image" src={product.imageURL} alt="product" />
        </div>
        <div className="product-description">{product.description}</div>
      </div>
      <div className="product-price-button-container">
        <div className="product-price">Rs{product.price}</div>
        <Button type="sign" onClick={handleAddToCart}>
          Buy now
          <span
            className="product-card-price--mobile"
            style={{ color: "white" }}
          >
            @ Rs {product.price}
          </span>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
