import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useRouteMatch } from "react-router";

export default function useProduct(){
    const [selectedProducts, setSelectedProducts] = useState([]);
    const all_products = useSelector(state => state.product.allProducts);
    const match = useRouteMatch("/products/:id");

    function handleSideBarClick(id) {
        let selected = all_products.filter(product => id === product.category);
        setSelectedProducts(selected);
    }

    useEffect(()=>{
        match ? setSelectedProducts(all_products && all_products.filter(product=>product.category === match.params.id)) 
        : setSelectedProducts(all_products)
    },[ all_products])

    return {
        selectedProducts,
        handleSideBarClick
    }
}