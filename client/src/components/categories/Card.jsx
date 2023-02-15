import Link from "next/link";
import FillImage from "../image/FillImage";
import styles from "./Card.module.scss";

export default function Card({ item, index }) {
  return (
    <div className={index & 1 ? styles.cardWrapperOdd : styles.cardWrapperEven}>
      <div className={styles.cardImg}>
        <FillImage src={item.imageUrl} alt={item.description} />
      </div>
      <div className={styles.cardDetails}>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <Link href={`/products?category=${item.key}`}>
          <button className={styles.cardButton}>Explore {item.key}</button>
        </Link>
      </div>
    </div>
  );
}
