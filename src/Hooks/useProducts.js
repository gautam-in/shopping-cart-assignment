import { useSelector } from 'react-redux';
import  {useEffect,useState} from 'react';
import {useHistory, useLocation, useRouteMatch } from 'react-router-dom';

export default function useProducts(){
    const filteredProductType = useSelector((state)=> state.products.productType)
    .filter(product=>product.enabled).sort((a,b)=> a.order - b.order);

    const allProducts = useSelector((state)=> state.products.allProducts);
    const history = useHistory();
    const location = useLocation();
    const match = useRouteMatch("/products/:id");

    const [filteredProducts, setFilteredProducts] = useState(allProducts);
    
    useEffect(()=>{
        match ? setFilteredProducts(allProducts && allProducts.filter(product=>product.category === match.params.id)) 
        : setFilteredProducts(allProducts)
    },[location,allProducts])

    const handleProduct = (id) => {
        id ? history.push(`/products/${id}`) : history.push('/products')
    }
    
    
    return{
        filteredProductType,
        filteredProducts,
        handleProduct,
    }
}