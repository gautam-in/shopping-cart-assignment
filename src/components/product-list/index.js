import { useEffect, useState } from "react";
import ProductCard from "../product-card";

import './product-list.scss';

const ProductList = ({activeCategory}) => {
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:5000/products')
        .then((response) => response.json())
        .then((data) => {
            setProducts(data);
        });
    }, []);

    return(
        <div className="product-list__container">
           { products.map((product) => {
                return activeCategory === null || product.category === activeCategory ? (
                        <ProductCard key={product.id} product={product}/>
                        ) : (null);
            })}
        </div>
    );
}

export default ProductList;