import React, { useContext, useState } from "react";
import LinesEllipsis from "react-lines-ellipsis";
import ButtonPrimary from "../../Components/ButtonPrimary/ButtonPrimary";
import { AddToCartContext } from "../../Context/AddToCartContext";
import { addToCartService } from "../../Services/services";
import Alert from "../../Components/Alert/Alert";
import "./Product.scss";

const Product = (props) => {
  const { cart, setCart } = useContext(AddToCartContext);
  const { data, setDate } = props;
  const [msg, setMsg] = useState("");
  const {
    name,
    imageURL = "/images/products/fruit-n-veg/kiwi-green.jpg",
    description,
    price
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
    console.log(result)
    setMsg(result !== undefined ? result?.responseMessage : "Item added to the cart");
    removeMsg();
    setDate(new Date());
  };

  return (
    <div className="product-container">
      {msg !== "" && <Alert msg={msg} />}
      <div className="product-label-name">
        <LinesEllipsis
          text={name}
          maxLine="2"
          ellipsis="..."
          trimRight
          basedOn="letters"
        />
      </div>
      <div className="product-details">
        <div className="product-image">
          <img src={imageURL} alt={`Product label - ${name}`} />
        </div>
        <div className="product-description">
        <div className="overview">
          <LinesEllipsis
            text={description}
            maxLine="4"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </div>
        <div className="product-price-details">
          <div className="product-price">MRP Rs:{price}</div>
          <div className="product-buynow-btn">
            <ButtonPrimary click={addToCart} title="Buy Now" />
          </div>
          <div className="product-buynow-priceBtn">
            <ButtonPrimary click={addToCart} title={`Buy Now @ Rs.${price}`} />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
