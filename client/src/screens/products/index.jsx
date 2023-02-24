
import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { productList, productMainContainer, divider, listContainer, mainProductContainer } from './style'
import ProductCard from '../../ui/components/product-card';

const Products = () => {
    const [categoryData, setCategoryData] = useState([]);
    const [products, setProducts] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();
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
            setProducts(() => {
                if (id) {
                    return data?.filter(item => {
                        return item.category === id;
                    })
                }
                return data;
            });
        }
        fetchProducts();
    }, [id]);


    const handleCategorySelect = (categoryId) => {
        navigate(`/products/${categoryId}`)
    }

    return (<>
        <div style={productMainContainer}>
            {categoryData?.map(item =>
                <ul style={listContainer} key={item.id} onClick={() => handleCategorySelect(item.id)}>
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