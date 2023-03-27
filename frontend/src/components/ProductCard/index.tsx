import { ImageProps } from "next/image";
import React from "react";
import Button from "../Button";
import styles from "./ProductCard.module.scss";
type StaticImageData = {
  src: string;
  height: number;
  width: number;
  placeholder?: string;
};

export interface ProductCardProps {
  title: string;
  productImg: string | StaticImageData;
  description: string;
  price: number;
}

const ProductCard = ({
  title,
  productImg,
  description,
  price,
}: ProductCardProps) => {
  return (
    <article className={styles["product-card"]}>
      <header className={styles["product-card--header"]}>
        <h4>{title}</h4>
      </header>
      <img
        className={styles["product-card--img"]}
        src={productImg as string}
        alt={title}
      />
      <p className={styles["product-card--description"]}>{description}</p>
      <footer className={styles["product-card--footer"]}>
        <p className={styles["product-card--footer--price"]}>MRP Rs.{price}</p>
        <Button className={styles["product-card--footer--buy-now"]}>
          Buy Now<span> @ Rs.{price}</span>
        </Button>
      </footer>
    </article>
  );
};

export default ProductCard;
