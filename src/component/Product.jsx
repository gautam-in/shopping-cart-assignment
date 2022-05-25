import axios from "axios";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../redux/features/appSlice";
import Button from "./Button";

import "../styles/product.scss";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { name, imageURL, description, price, id } = product;

  const handleBuy = async () => {
    try {
      await axios.post("http://localhost:8000/addToCart").then((res) => {
        if (res.data.response === "Success") {
          dispatch(addItemToCart(product));
        }
      });
    } catch (error) {
      alert("Something went wrong");
      console.log("There is some error while buying this item", error.message);
    }
  };

  return (
    <div className="product-card" key={id}>
      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <img
          src={require(`../../src${imageURL}`)}
          alt={`${name}`}
          className="product-image"
        />
        <span className="product-description">{description}</span>
      </div>
      <div className="product-action">
        <span className="price">MRP Rs. {price}</span>
        <Button buttonType="buy" onClick={handleBuy}>
          But now
        </Button>
      </div>
    </div>
  );
};

export default Product;
