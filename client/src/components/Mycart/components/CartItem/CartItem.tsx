import React, { useEffect, useRef, useState } from "react";
import styles from "./CartItem.module.scss";
import Button from "@reusableComponents/Button/Button";

const CartItem: any = ({ item }: any) => {
  const { price, name, imageURL } = item;
  const [itemDetails, setItemDetails] = useState({
    count: 1,
    price: price,
  });

  const handleBtnClick = (e: any) => {
    let newCount: any, newPrice: any;
    debugger;
    if (e.target.name === "increment") newCount = itemDetails.count + 1;
    else newCount = itemDetails.count - 1 <= 0 ? 0 : itemDetails.count - 1;

    newPrice = price * newCount;
    setItemDetails((prev: any) => ({
      ...prev,
      count: newCount,
      price: newPrice,
    }));
  };

  return (
    <section className={`disp-flex align-items-center ${styles.itemContainer}`}>
      <img
        width="100"
        src={require(`@images/${imageURL?.split("images/")[1]}`)}
        alt={name}
      />
      <div className={styles.ItemNavContainer}>
        <p className="mar-0">{name}</p>
        <div className="disp-flex align-items-center">
          <Button
            name="decrement"
            className={styles["icon_nav"]}
            onClick={handleBtnClick}
          >
            <span>-</span>
          </Button>
          <span className={styles.itemCount}>{itemDetails.count}</span>
          <Button
            name="increment"
            className={styles["icon_nav"]}
            onClick={handleBtnClick}
          >
            <span>+</span>
          </Button>
          <span style={{ margin: "0px 25px", fontWeight: 500 }}>x</span>
          <span style={{ fontWeight: 500 }}>RS.{price}</span>
          <span style={{ flex: 1, textAlign: "end", fontWeight: 500 }}>
            RS.{itemDetails.price}
          </span>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
