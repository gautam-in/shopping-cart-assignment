import { useEffect, useState } from "react";
import ProductCard from "../product-card";

import './product-list.scss';

const ProductList = ({activeCategory}) => {
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        fetch('/products')
        .then((response) => response.json())
        .then((data) => {
            setProducts(data);
        });
    }, []);

    return(
        <div className="product-list__container">
           { products.map((product) => {
                return activeCategory === 'all' || product.category === activeCategory ? (
                        <ProductCard key={product.id} product={product}/>
                        ) : (null);
            })}
        </div>
    );
}

export default ProductList;