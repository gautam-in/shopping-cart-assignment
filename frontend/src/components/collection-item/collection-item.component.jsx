import React, { useEffect, useState, useContext } from "react";
import "./collection-item.scss";
import CustomButton from "../custom-button/custom-button.component";
import ProductContextConsumer from "../../pages/ProductsDisplay/ProductsPage.component";
import { MyContext } from "../../App";
import CartItem from "../cart-item/cart-item.component";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
const CollectionItem = ({ product }) => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  const cart = useContext(MyContext);
  const {addItemToCart,cartItems}=cart;
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const addProductToCart = (e, product) => {
  //   e.preventDefault();
  //   cart.chaangeCartItems(e, product);
  // };
  let { width } = windowDimensions;
  return (
    <div className="card-ele">
      <h5 className="card-ele-title">{product.name}</h5>
      <div className="card-ele-body">
        <img
          className="card-ele-image"
          src={product.imageURL}
          alt={` ${product.name}`}
        ></img>
        <div className="card-ele-product-description">
            {product.description}
        </div>
      </div> 
      <button
            onClick={(e) =>addItemToCart(e, product)}
            className="card-ele-footer-button"
          >
            {`MRP Rs.${product.price} Buy Now`}
      </button>

      <div
            onClick={(e) =>addItemToCart(e, product)}
            className="card-ele-footer-button-largedevice"
          >
            <span className="price"> {`MRP Rs.${product.price} `}</span>
            <span className="buy-now">Buy Now</span>
           
      </div>

    </div>
  )
};

export default CollectionItem;
