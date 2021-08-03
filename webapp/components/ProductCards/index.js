import styles from "./ProductCards.module.css";
import {Button} from "antd";
import { useState, useEffect } from "react";
import {ProductCard} from "./ProductCard";

export const ProductCards = (props) => {
    const { productData } = props;
    return(
        <div className={styles["cards-container"]}>
            {productData.map((product) => (
                <ProductCard product={product}/>
            ))}
        </div>
    )
};