import React, { useEffect, useState } from "react";
import Button from "@reusableComponents/Button/Button";
import styles from "./ProductItem.module.scss";
import axios from "axios";
import { useStore } from "@src/customHooks/useContext";
import { useHistory } from "react-router-dom";

const ProductItem: any = ({ Item }: any) => {
  const { imageURL, name, description, price, sku, stock, id } = Item;
  const [state, dispatch] = useStore();
  const history: any = useHistory();

  const handleBuy = (e: any) => {
    if (state.logedInUserDetails) {
      axios.get(`http://localhost:3000/addToCart`).then((response: any) => {
        alert("product added to your cart successfully");
        dispatch({
          type: "ADD_ITEMS_TO_CART",
          payload: Item,
        });
      });
    } else {
      history.push("/login");
    }
  };

  return (
    <section className={`${styles.productContainer}`}>
      <h5 className={`mar-0 ${styles.heading}`} title={name}>
        {name}
      </h5>
      <img
        src={require(`@images/${imageURL?.split("images/")[1]}`)}
        alt={name}
        width="100%"
        className={`${styles.productImg}`}
      />
      <p className={`mar-0 ${styles.description}`}>{description}</p>
      <aside className={`${styles.paymentCont}`}>
        <div className={`${styles.priceTag}`}>MRP Rs.{price}</div>
        <Button style={{ float: "right" }} onClick={handleBuy}>
          &nbsp;Buy Now&nbsp;
        </Button>
      </aside>
    </section>
  );
};

export default ProductItem;
