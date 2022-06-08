import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import img1 from "../images/home/fruits.png";
import "./product.css";
import { CartActions } from "../../redux/cart-slice";
import { useDispatch, useSelector } from "react-redux";

const Product = ({ imageURL, description, price, pname, id }) => {
  const data = useSelector((state) => state.cartSlice);
  console.log(data);
  const dispatch = useDispatch();
  const handleBuyNow = (item) => {
    console.log("Seshu");
    dispatch(CartActions.addProduct(item));
  };
  return (
    <section className="cardContainer">
      <h1 className="pName">{pname}</h1>
      <div className="mobileProduct">
        <img src={img1} className="productImg" />

        <aside className="productDetails">
          <p className="productDesc">{description.slice(0, 100)}</p>
          <div className="productMrp">
            <h5>Rs.{price}</h5>
            <button
              className="buyButton"
              onClick={() => handleBuyNow({ img1, pname, price, id })}
            >
              Buy Now
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
};
export default Product;
