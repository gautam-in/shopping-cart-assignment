import "./card.scss";
import Button from "../button/button";
import { addItem } from "../../redux/cart/cart.actions";
import { useDispatch } from "react-redux";
import { useCallback } from "react";

const Card = ({ product }) => {
  const dispatch = useDispatch();
  const addProduct = useCallback(
    () => dispatch(addItem(product)),
    [dispatch, product]
  );

  return (
    <div className="card-container">
      <div className="title">{product?.name}</div>
      <div className="image-block">
        <div className="image">
          <img src={product?.imageURL} alt={product?.name} />
        </div>
        <div className="description">
          <p>{product?.description}</p>
          <Button
            onClick={addProduct}
            className="desktop-none"
          >{`Buy Now @ Rs.${product?.price}`}</Button>
        </div>
      </div>
      <div className="tab-visible">
        <Button onClick={addProduct}>{`Buy Now @ Rs.${product?.price}`}</Button>
      </div>
      <div className="price-container">
        <span className="price">{`MRP Rs.${product?.price}`}</span>
        <Button onClick={addProduct}>Buy Now</Button>
      </div>
    </div>
  );
};

export default Card;
