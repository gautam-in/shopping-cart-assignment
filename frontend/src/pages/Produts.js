import React from 'react';
import SideBar from '../components/SideBar/SideBar';
import ProductsList from '../components/ProductsList/ProductsList';
import styled from 'styled-components';
import { useSelector } from "react-redux";
import Cart from "../components/Cart/Cart";
import { useParams } from "react-router-dom";
import products from '../server/products/index.get.json';

const ProductStyles = styled.div`
    display: flex;
    max-width: 100vw;
  
    @media screen and (max-width: 600px) {
      flex-direction: column;
    }
`;
export default function Products() {
    const { id } = useParams();
    const filteredProducts = products.filter((product) => {
        if (product.category === id)
            return product
    })
    const cart = useSelector((state) => state.cart);
    return (
        <ProductStyles>
            <SideBar />
            {filteredProducts.length>0 ? <ProductsList products={filteredProducts} /> : 
            <ProductsList products={products} />}
            {cart.showCart && <Cart />}
        </ProductStyles>
    )
}