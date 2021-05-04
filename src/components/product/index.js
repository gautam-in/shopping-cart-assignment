import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../common/button";
import Image from "../common/image";

import "./index.scss";

import label from "./data/index.json";

const Product = ({ product, handlecart }) => {
  //   const history = useHistory();
  const handleBuy = () => {
    // handlecart(product);
    // history.push("/cart");
  };
  return (
    <div className="card_container">
      <div className="card_wrapper">
        <h4 className="title">{product.name}</h4>

        <Image
          imgClassName="img-fluid"
          src_2x={product.imageURL}
          src={product.imageURL}
          alt={product.name}
        />

        <div className="mt-1 description bg-light">
          <div className="text-clamp-3" title={product.description}>
            {product.description}
          </div>
        </div>

        <div className="card-footer">
          <div className="price">{`${label.priceLabel} ${product.price}`}</div>
          <Button className="add_to_cart" variant="primary" onClick={handleBuy}>
            {label.addToCartLabel}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
