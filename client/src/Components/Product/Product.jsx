/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import LinesEllipsis from "react-lines-ellipsis";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import { AddToCartContext } from "../../Context/AddCartContext";
import { addToCartService } from "../../Services/services";
import Alert from "../Alert/Alert";
import "./Product.scss";

// eslint-disable-next-line react/display-name
export default (props) => {
  const { cart, setCart } = useContext(AddToCartContext);
  const { data, setDate } = props;
  const [msg, setMsg] = useState("");
  const {
    name,
    imageURL = "/images/products/fruit-n-veg/kiwi-green.jpg",
    description,
    price,
  } = data;

  const removeMsg = (time = 2000) => {
    setTimeout(() => {
      setMsg("");
    }, [time]);
  };

  const addToCart = async () => {
    const cartList = cart;
    cartList.push(data);
    setCart(cartList);
    const result = await addToCartService();
    setMsg(result.responseMessage);
    removeMsg();
    setDate(new Date());
  };

  return (
    <div className="product-container">
      {msg != "" && <Alert msg={msg} />}
      <div className="title">
        <LinesEllipsis
          text={name}
          maxLine="2"
          ellipsis="..."
          trimRight
          basedOn="letters"
        />
      </div>
      <div className="body-container">
        <div className="img">
          <img src={imageURL} alt="product image" />
        </div>
        <div className="description">
          <LinesEllipsis
            text={description}
            maxLine="4"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </div>
      </div>
      <div className="footer">
        <div className="price">MRP Rs:{price}</div>
        <div className="btn">
          <ButtonPrimary click={addToCart} title="Buy Now" />
        </div>
        <div className="full-btn">
          <ButtonPrimary click={addToCart} title={`Buy Now @ ${price}`} />
        </div>
      </div>
    </div>
  );
};
