import Image from "next/image";
import styles from "./ProductCard.module.scss";

export default function ProductCard({ item }) {
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
      <button className={styles.priceBtn}>Buy Now @ Rs.{item.price}</button>
    </div>
  );
}
