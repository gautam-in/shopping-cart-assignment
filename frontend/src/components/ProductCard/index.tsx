import useCartStore, { StaticImageData } from "@/store/cartStore";
import React from "react";
import Button from "../Button";
import styles from "./ProductCard.module.scss";

export interface ProductCardProps {
  id: string;
  title: string;
  productImg: string | StaticImageData;
  description: string;
  price: number;
}

const ProductCard = ({
  id,
  title,
  productImg,
  description,
  price,
}: ProductCardProps) => {
  const { addToCart } = useCartStore();

  const handleAddToCart = () => {
    addToCart({ id, title, productImg, price });
  };

  return (
    <article className={styles["product-card"]}>
      <header className={styles["product-card--header"]}>
        <h4>{title?.slice(0, 72)}</h4>
      </header>
      <img
        className={styles["product-card--img"]}
        src={productImg as string}
        alt={title}
        width="200"
        height="200"
      />
      <p
        className={styles["product-card--description"]}
        aria-label={description}
      >
        {description?.slice(0, 140)}
      </p>
      <footer className={styles["product-card--footer"]}>
        <p className={styles["product-card--footer--price"]}>MRP Rs.{price}</p>
        <Button
          onClick={handleAddToCart}
          className={styles["product-card--footer--buy-now"]}
        >
          Buy Now<span> @ Rs.{price}</span>
        </Button>
      </footer>
    </article>
  );
};

export default ProductCard;
