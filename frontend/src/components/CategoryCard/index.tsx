import React from "react";
import Button from "../Button";
import styles from "./CateGoryCard.module.scss";

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  placeholder?: string;
};

export interface CateGoryCardProps {
  title: string;
  imgSrc: string | StaticImageData;
  description: string;
  btnText: string;
  order: number;
  onClick?: () => null;
}

const CateGoryCard = ({
  title,
  imgSrc,
  order,
  btnText,
  onClick,
  description,
}: CateGoryCardProps) => {
  const classNames =
    order % 2 !== 0
      ? `${styles["catergory-card"]}`
      : `${styles["catergory-card"]} ${styles["catergory-card-reverse"]}`;
  return (
    <article className={classNames}>
      <img
        className={styles["catergory-card--img"]}
        src={imgSrc as string}
        alt={title}
        width={400}
      />
      <div className={styles["catergory-card--content"]}>
        <header>
          <h4>{title}</h4>
        </header>
        <p>{description}</p>
        <Button onClick={onClick}>Explore {btnText}</Button>
      </div>
    </article>
  );
};

export default CateGoryCard;
