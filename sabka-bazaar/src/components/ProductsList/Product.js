import { Button } from "../Button/Button";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { addToCart } from "../../pages/cart/store/actionCreators";
import React from "react";
import { selectCartItems } from "../../pages/cart/store/selectors";
const Product = ({ name, id, imageURL, description, price }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addToCartHandler = useCallback(
    ({ name, id, imageURL, description, price }) => {
      dispatch(
        addToCart(cartItems, { name, id, imageURL, description, price })
      );
    },
    [{ name, id, imageURL, description, price }]
  );
  return (
    <div key={id} className="product-container">
      <div className="product-title">{name}</div>
      <div className="product-img-container">
        <img
          src={imageURL}
          alt={name}
          className="product-img"
          width="184"
          height="184"
        />
      </div>
      {/* <div className="product-second-child"> */}
      <div className="product-desc">
        <p>{description}</p>
      </div>
      <div className="buy-now">
        <p>Mrp Rs. {price}</p>
        <div className="button-container">
          <Button
            title="Buy Now"
            price={price}
            onClick={() =>
              addToCartHandler({ name, id, imageURL, description, price })
            }
          />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};
Product.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  imageURL: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
};

export default React.memo(Product);
