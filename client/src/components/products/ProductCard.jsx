import { useCartDispatch, useCartState } from "@/src/hooks/useCartContext";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./ProductCard.module.scss";

export default function ProductCard({ item }) {
  const router = useRouter();
  const cartState = useCartState();
  const cartDispatch = useCartDispatch();

  const [inCart, setInCart] = useState(false);

  const handleBuyNowClick = () => {
    if (inCart) {
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
    }
  }, []);

  const cartBtnText = inCart ? "Go to Cart" : `Buy Now @ Rs.${item.price}`;

  return (
    <div className={styles.container}>
      <div className={styles.title}>{item.name}</div>
      <div className={styles.photo}>
        <Image src={item.imageURL} alt={item.name} fill />
      </div>
      <div className={styles.description}>{item.description}</div>
      <div></div>
      <div className={styles.purchasePrice}>
        <div className={styles.price}>MRP Rs.{item.price}</div>
        <button className={styles.purchaseBtn}>Buy Now</button>
      </div>
      <button onClick={handleBuyNowClick} className={styles.priceBtn}>
        {cartBtnText}
      </button>
    </div>
  );
}
