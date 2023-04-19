import { ProductsAPI } from "@api/ProductsAPI";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Products.module.scss";
import Button from "@components/Button";
import { useDispatch } from "react-redux";
import { add } from "../../store/cartReducer";

export default function ProductListing() {
    const [products, setProducts] = useState([]);
    let params = useParams();
    const dispatch = useDispatch();

    const getCategories = async () => {
        try {
            const productsList = await ProductsAPI.getProducts();
            setProducts(productsList);
        } catch {
            setProducts([]);
        }
    };

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <>
            {
                products.filter(prod => !params.categoryId || prod.category === params.categoryId).map((product) => (
                    <div className={styles.productsCard} key={product.id}>
                        <h2>{product.name}</h2>
                        <div className={styles.productDetailWrapper}>
                            <div className={styles.productImage}>
                                <img loading="lazy" src={product.imageURL} aria-hidden="true" />
                            </div>
                            <div className={styles.textWrapper}>
                                <div className={styles.description}>{product.description}</div>
                                <Button className={styles.buyNowMob} onClick={() => dispatch(add(product))}>Buy Now @ MRP {product.price}</Button>
                            </div>
                        </div>
                        <div className={styles.buttonWrapper}>
                            <Button className={styles.buyNowTab} onClick={() => dispatch(add(product))}>Buy Now @ MRP {product.price}</Button>
                            <p className={styles.buyNowDesk}>MRP Rs.{product.price}</p>
                            <Button className={styles.buyNowDesk} onClick={() => dispatch(add(product))}>Buy Now</Button>
                        </div>
                    </div>
                ))
            }
        </>
    )
}