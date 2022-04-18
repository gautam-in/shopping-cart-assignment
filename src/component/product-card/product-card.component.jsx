import { connect } from "react-redux";
import "./product-card.styles.scss";
import Button from "../button/button.component";
import { addToCart } from "../../redux/action/actions";

const ProductCard = ({ product, addItemToCart, isTablet, isMobile }) => {
  const hanldeBuynow = () => {
    addItemToCart(product);
  };
  return (
    <div className="product-card-container">
      <div className="product-name">{product.name}</div>
      <div className="image-footer">
        <div
          className={
            isTablet && !isMobile ? "d-flex" : isTablet && isMobile && "d-flex"
          }
        >
          <img
            className="product-card-image"
            src={product.imageURL}
            alt={product.name}
          />
          <div>
            <div className="description">{product.description}</div>
            {isTablet && isMobile && (
              <Button onClick={hanldeBuynow}>
                Buy Now @ Rs.{product.price}
              </Button>
            )}
          </div>
        </div>
        {isTablet && !isMobile ? (
          <Button onClick={hanldeBuynow}>Buy Now @ Rs.{product.price}</Button>
        ) : (
          !isTablet && (
            <div className="product-card-footer">
              <div className="price">MRP RS.{product.price}</div>
              <Button onClick={hanldeBuynow}>BuyNow</Button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addItemToCart: (data) => (dispatch) => dispatch(addToCart(data)),
};

export default connect(null, mapDispatchToProps)(ProductCard);
