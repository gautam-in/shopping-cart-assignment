import { useCartDispatch } from "@/src/hooks/useCartContext";
import Image from "next/image";
import styles from "./CartItem.module.scss";

export default function CartItem({ item }) {
  const cartDispatch = useCartDispatch();

  const handleQtBtn = (e) => {
    const id = e.target.id;
    const type = id === "increment" ? "INCREMENT_ITEM" : "DECREMENT_ITEM";
    cartDispatch({
      type,
      payload: item,
    });
  };

  return (
    <div className={styles.container}>
      <Image src={item.imageURL} alt={item.name} height={100} width={100} />
      <div className={styles.itemDetails}>
        <div className={styles.itemName}>{item.name}</div>
        <div className={styles.priceContainer}>
          <div className={styles.itemPrice} onClick={handleQtBtn}>
            <button id="decrement">-</button>
            <span>{item.totalQt}</span>
            <button id="increment">+</button> x Rs.{item.price}
          </div>
          <div className={styles.itemTotalPrice}>Rs.{item.totalPrice}</div>
        </div>
      </div>
    </div>
  );
}
