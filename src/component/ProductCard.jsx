import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../store/slices/cart/cart.selector";
import { addItemsToCart } from "../store/slices/cart/cart.action";
import Button from "./Button";
import "../styles/product-card.scss";

const ProductCard = ({ product }) => {
  const { id, name, imageURL, description, price } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const handleBuy = async () => {
    try {
      await axios.post("http://localhost:8000/addToCart").then((res) => {
        if (res.data.response === "Success") {
          dispatch(addItemsToCart(cartItems, product));
        }
      });
    } catch (error) {
      alert("Something went wrong");
      console.log("There is some error while buying this item", error.message);
    }
  };

  return (
    <div className="product-card">
      <div className="product-card__details">
        <h1 className="product-card-title">{name}</h1>
        <div className="product-card__desc-container">
          <div className="product-card__img-container">
            <img
              className="product-card-img"
              src={require(`../../src${imageURL}`)}
              alt={`${name}`}
            />
          </div>
          <p className="product-card-desc">{description}</p>
        </div>
      </div>
      <div className="product-card__bottom">
        <span className="product-card-price">price Rs{price}</span>
        <Button
          onClick={handleBuy}
          buttonType="max"
          type="button"
          aria-label={`Buy ${name}`}
        >
          Buy Now
          <span
            className="product-card-price--mobile"
            style={{ color: "white" }}
          >
            @ MSRP Rs {price}
          </span>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

// <div className="product-card" key={id}>
//   <div className="product-details">
//     <h2 className="product-name">{name}</h2>
//     <img
//       src={require(`../../src${imageURL}`)}
//       alt={`${name}`}
//       className="product-image"
//     />
//     <span className="product-description">{description}</span>
//   </div>
//   <div className="product-action">
//     <span className="price">MRP Rs. {price}</span>
//     <Button buttonType="buy" onClick={handleBuy}>
//       But now
//     </Button>
//   </div>
// </div>
