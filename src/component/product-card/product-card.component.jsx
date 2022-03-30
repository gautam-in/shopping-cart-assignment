import { connect } from "react-redux";
import "./product-card.styles.scss";
import Button from "../button/button.component";
import { addToCart } from "../../redux/action/cart-actions";

const ProductCard = ({ product, addItemToCart }) => {
  const hanldeBuynow = () => {
    addItemToCart(product);
  };
  return (
    <div className="product-card-container">
      <div className="product-name">{product.name}</div>
      <div className="image-footer">
        <img
          className="product-card-image"
          src={process.env.PUBLIC_URL + product.imageURL}
          alt={product.name}
        />
        <div className="description">{product.description}</div>
        <div className="product-card-footer">
          <p className="price">MRP RS.{product.price}</p>
          <Button onClick={hanldeBuynow}>BuyNow</Button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addItemToCart: (data) => (dispatch) => dispatch(addToCart(data)),
};

export default connect(null, mapDispatchToProps)(ProductCard);
