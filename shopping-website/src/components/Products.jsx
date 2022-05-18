import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProductData } from '../store/products/product.action';
import { selectProductData } from '../store/products/product.selector';
import { fetchProductData } from '../utils/server/server.util';
import ProductItem from './ProductItem';
import './Products.scss';


const Products = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const getProductData = async () => {
          const productData = await fetchProductData();
          dispatch(setProductData(productData));
        };
    
        getProductData();
      }, []);
    
      const productItems = useSelector(selectProductData);

    return (
        <>
            <section className='productsContainer'>
            {productItems.map((productItem) => (
                <ProductItem key={productItem.id} product = {productItem} />
                
        ))}
        </section>
        </>
    )

}


export default Products;