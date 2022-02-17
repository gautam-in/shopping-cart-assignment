import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cartReducer/cartActions";
import classes from "./Card.module.css";

const Card = ({ currentProduct }) => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const { id, imageURL, name, price, stock } = currentProduct;

  return (
    <section className={classes.card__container}>
      <h4>{currentProduct.name}</h4>
      <div className={classes.card__description}>
        <img className={classes.image} src={currentProduct.imageURL} alt="" />
        <p className={classes.description}>{currentProduct.description}</p>
      </div>
      <button
        className={classes.submit__button}
        onClick={() => {
          dispatch(addItemToCart(products, id, imageURL, name, price, stock));
        }}
      >
        Buy Now @ Rs {currentProduct.price}
      </button>
    </section>
  );
};

export default Card;
