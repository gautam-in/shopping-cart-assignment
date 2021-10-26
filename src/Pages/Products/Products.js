import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components";
import Dropdown from "../../Components/Dropdown/Dropdown";
import CartModel from "../../Components/Modal/CartModel";
import ProductCard from "../../Components/ProductCard/ProductCard";
import SideBar from "../../Components/SideBar/SideBar";
import useMedia from "../../Hooks/useMedia";
import useProduct from "../../Hooks/useProduct";
import { fetchAllProd, fetchProdTypes } from "../../Store/actions/product";
import { PRODUCT_WRAPPER, RIGHT_CONTENT } from "../../Styles/ProductStyles";

export default function Products() {
    const isMobile = useMedia("(max-width: 480px)");
    const isTab = useMedia("(min-width:481px) and (max-width: 768px)");
    const cartState = useSelector(state => state.cartReducer.cartState);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllProd());
        dispatch(fetchProdTypes());
    }, []);
    const { handleSideBarClick, selectedProducts } = useProduct();
    const productTypes = useSelector(state => state.product.productType);
    return (
        <>
        {isMobile && <Dropdown itemList={productTypes} handleClick={handleSideBarClick}></Dropdown>}
        <PRODUCT_WRAPPER>
            {!isMobile && <SideBar itemList={productTypes} handleClick={handleSideBarClick} />}
            <RIGHT_CONTENT>
            {selectedProducts && selectedProducts.map((product) => {
                return <ProductCard key={product.id} product={product}></ProductCard>
            })}
            </RIGHT_CONTENT>
        </PRODUCT_WRAPPER>
        {cartState && <CartModel></CartModel>}
        </>
    )
}