import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { getProductList } from '../../services/ApiService';
import ProductCard from '../Utilities/ProductCard';
import { StyledProductListing } from './ProductListing.styled';

const ProductListing = () => {

    const [productList, setProductList] = useState([]);

    useEffect(() => {
      async function getProducts() {
        const productListing = await getProductList();
        setProductList(productListing);
      }
  
      getProducts();
    }, []);

  return (
    <StyledProductListing>
        {
            productList.map((product) => (
                <li key={product.id}>
                <ProductCard
                    imageSrc={product.imageURL}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    category={product.category}
                />
                </li>
            ))
        }
    </StyledProductListing>
  )
}

export default ProductListing;