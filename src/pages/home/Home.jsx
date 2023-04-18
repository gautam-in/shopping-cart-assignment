import React, { useEffect, useState } from "react";
import useDocumentTitle from "@hooks/useDocumentTitle";
import { ProductsAPI } from "@api/ProductsAPI";
import Carousel from "@components/Carousel";
import styles from "./Home.module.scss";
import Button from "@components/Button";
import { useNavigate } from "react-router-dom";

export function Home() {
    const [banners, setBanners] = useState([]);
    const [categories, setCategories] = useState([{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}]);
    const navigate = useNavigate();

    useDocumentTitle("Home | Sabka Bazaar");

    const getBanner = async () => {
        try {
            const bannerList = await ProductsAPI.getBanner();
            setBanners(bannerList);
        } catch {
            setBanners([]);
        }
    };

    const getCategories = async () => {
        try {
            const categoryList = await ProductsAPI.getCategories();
            setCategories(categoryList);
            console.log(categoryList);
        } catch {
            setCategories([]);
        }
    };

    const loadProducts = (id) => {
        navigate("/products");
    };

    useEffect(() => {
        getBanner();
        getCategories();
    }, []);

    return (
        <>
            <section className="bs-bottom">
                <Carousel
                    items={banners}
                    loop
                    aspectRatio={4} // Image dimension is 1200x300 (4:1)
                />
            </section>
            {
                categories.map((category, idx) => (
                    <section className={styles.category + " bs-bottom"} key={category.id}>
                        {
                            category.imageUrl ? <>
                                {
                                    idx % 2 == 0 ? <img src={category.imageUrl} loading="lazy" alt={category.description} /> : null
                                }
                                <div className={styles.categoryDetails}>
                                    <h2 className={styles.categoryName}>{category.name}</h2>
                                    <p className={styles.categoryDescription}>{category.description}</p>
                                    <Button onClick={loadProducts}>Explore {category.key}</Button>
                                </div>
                                {
                                    idx % 2 == 1 ? <img src={category.imageUrl} loading="lazy" alt={category.description} /> : null
                                }
                            </> : null
                        }
                    </section>
                ))
            }
        </>
    )
}