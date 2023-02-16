import { useCartDispatch, useCartState } from "@/src/hooks/useCartContext";
import useMediaQuery from "@/src/hooks/useMediaQuery";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FillImage from "../image/FillImage";
import styles from "./ProductCard.module.scss";

export default function ProductCard({ item, index }) {
  const router = useRouter();
  const cartState = useCartState();
  const cartDispatch = useCartDispatch();
  const matches = useMediaQuery("(min-width: 1121px)");

  const [inCart, setInCart] = useState(false);

  const handleBuyNowClick = () => {
    if (matches && inCart) {
      cartDispatch({
        type: "SHOW_CART_SIDEBAR",
        payload: true,
      });
    } else if (!matches && inCart) {
      router.push("/cart");
    } else {
      cartDispatch({
        type: "ADD_TO_CART",
        payload: item,
      });
      setInCart(true);
    }
  };

  useEffect(() => {
    if (cartState.items[item.id]) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [cartState.items, item.id]);

  const cartBtnText = inCart ? "Go to Cart" : `Buy Now @ Rs.${item.price}`;

  return (
    <div className={styles.container}>
      <div className={styles.title}>{item.name}</div>
      <div className={styles.photo}>
        <FillImage priority={index < 2} src={item.imageURL} alt={item.name} />
      </div>
      <div className={styles.description}>{item.description}</div>
      <div></div>
      <div className={styles.purchasePrice}>
        <div className={styles.price}>MRP Rs.{item.price}</div>
        <button onClick={handleBuyNowClick} className={styles.purchaseBtn}>
          {matches && inCart ? "Show Cart" : "Buy Now"}
        </button>
      </div>
      <button onClick={handleBuyNowClick} className={styles.priceBtn}>
        {cartBtnText}
      </button>
    </div>
  );
}
