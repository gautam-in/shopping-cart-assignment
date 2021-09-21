import React, { useState, useEffect } from "react";
import classes from "./CartCard.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { incrementProduct } from "../../Redux/cartReducer";
import { decrementProduct } from "../../Redux/cartReducer";

export default function CartCard({ id, name, imageURL, price, stock, count }) {
  const dispatch = useDispatch();

  let cartData = useSelector((state) => state.cartList.cartData);
  let productQuantity = cartData.find((item) => item.id === id);
  const [amount, setAmount] = useState(0);

  const incrementHandler = () => {
    if (stock === count) {
      alert(`We have only ${stock} ${name} items in stock`);
    } else {
      dispatch(
        incrementProduct({
          id,
        })
      );
    }
  };

  const decrementProducts = () => {
    dispatch(
      decrementProduct({
        id,
      })
    );
  };

  useEffect(() => {
    if (productQuantity) {
      setAmount(productQuantity.count * productQuantity.price);
    }
  }, [productQuantity]);

  return (
    <div className={classes.Container}>
      <div className={classes.ImgContainer}>
        <img src={imageURL} alt={name} />
      </div>
      <div className={classes.SecondaryContainer}>
        <p className={classes.ProductName}>{name}</p>
        <div className={classes.ActionContainer}>
          <div
            tabIndex="0"
            role="button"
            onClick={decrementProducts}
            className={classes.DecrementContainer}
          >
            -
          </div>
          <div className={classes.TotalCountContainer}>{count}</div>
          <div
            tabIndex="0"
            role="button"
            onClick={incrementHandler}
            className={classes.IncrementContainer}
          >
            +
          </div>
          <div className={classes.MultiplicationIcon}>×</div>
          <div className={classes.PriceContainer}>{price}</div>
        </div>
      </div>
      <div className={classes.TotalAmountContainer}>Rs{amount}</div>
    </div>
  );
}
