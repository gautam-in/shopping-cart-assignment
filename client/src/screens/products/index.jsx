
import { useEffect, useState } from "react";
import { productList, productMainContainer, divider, listContainer, mainProductContainer } from './style'
import ProductCard from '../../ui/components/product-card';

const Products = () => {
    const [categoryData, setCategoryData] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchCategoryData = async () => {
            let res = await fetch('http://localhost:5000/categories');
            let data = await res.json();
            setCategoryData(() => data);
        }
        fetchCategoryData();
    }, []);

    useEffect(() => {
        const fetchProducts = async () => {
            let res = await fetch('http://localhost:5000/products');
            let data = await res.json();
            setProducts(() => data);
        }
        fetchProducts();
    }, []);


    return (<>
        <div style={productMainContainer}>
            {categoryData?.map(item =>
                <ul style={listContainer} key={item.id}>
                    <li style={productList}>
                        {item.name}
                    </li>
                    <div style={divider}>
                    </div>
                </ul>)}
        </div>
        <div style={mainProductContainer}>
            <ProductCard products={products} />
        </div>
    </>)
}

export default Products;