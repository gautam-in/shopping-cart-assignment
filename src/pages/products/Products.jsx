import React, { useEffect, useState } from "react";
import useDocumentTitle from "@hooks/useDocumentTitle";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { ProductsAPI } from "@api/ProductsAPI";
import styles from "./Products.module.scss";

export function Products() {
    const [categories, setCategories] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const params = useParams();
    const navigate = useNavigate();

    useDocumentTitle("Products Listing | Sabka Bazaar");

    const getCategories = async () => {
        try {
            const categoryList = await ProductsAPI.getCategories();
            setCategory(categoryList);
            setCategories(categoryList);
        } catch {
            setCategories([]);
        }
    };

    const loadProducts = (category) => {
        setSelectedCategory(category);
        setIsOpen(false);
        navigate("/products/" + category.id);
    };

    const setCategory = (categoryList) => {
        if (!params?.categoryId) {
            setSelectedCategory(null);
        } else {
            setSelectedCategory(categoryList.find(cat => cat.id === params?.categoryId));
        }
    };

    useEffect(() => {
        if (!categories.length) {
            getCategories();
        }
    }, [params, params?.categoryId]);

    return (
        <div className={styles.products}>
            <aside className={styles.filters} tabIndex="0" aria-label="">
                {
                    categories.map((category) => (
                        <button className={styles.filterButton} onClick={() => loadProducts(category)} key={category.id} data-testid="categories-filter">
                            {category.name}
                        </button>
                    ))
                }
            </aside>
            <div className={styles.productListWrapper}>
                <div className={styles.dropdown}>
                    <button className={styles.dropdownTrigger} onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
                        <span>{ selectedCategory ? selectedCategory.name : "All Products" }</span>
                        <span>▼</span>
                    </button>
                    <ul className={`${styles.dropdownMenu} ${isOpen ? (" " + styles.open) : ""}`}>
                        {
                            categories.map((category) => (
                                <li key={category.id}>
                                    <button onClick={() => loadProducts(category)}>
                                        {category.name}
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <Outlet />
            </div>
        </div>
    )
}