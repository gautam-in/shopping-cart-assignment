import React, { useContext, useEffect, useState } from 'react';
import ProductCategory from '../../components/productCategory';
import ProductCard from '../../components/productCard';
import { Category, Product, getCategories, getProducts } from '../../services/AppService';
import AppContext from '../../contexts/appContext/app-context';

const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const {
        appState: { selectedCategory },
    } = useContext(AppContext);

    useEffect(() => {
        getProducts().then((data) => {
            setProducts(data);
        });
        getCategories().then((data) => {
            setCategories(data);
        });
    }, []);

    return (
        <main className="product container" id="products-list-container" role="main">
            <ProductCategory category={categories} />
            <section id="products-cards-container" className="product-cards-container">
                <ul
                    className="product-list"
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        flexWrap: 'wrap',
                        padding: 0,
                        margin: 0,
                        listStyle: 'none',
                    }}>
                    {selectedCategory === null && products.length > 0
                        ? products.map((item) => <ProductCard product={item} key={item.id} />)
                        : products
                              .filter((item) => item.category === selectedCategory)
                              .map((item) => <ProductCard product={item} key={item.id} />)}
                </ul>
            </section>
        </main>
    );
};

export default Products;
