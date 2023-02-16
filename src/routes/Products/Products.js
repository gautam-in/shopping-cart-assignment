import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard/ProductCard";

function Products({ }) {
    const productArr=useSelector(state=>state.products.products)
    return (
        <div className="flex">
            <Sidebar />
            <div className="w-5/6 bg-white flex flex-wrap p-2 h-screen overflow-auto">
                {productArr.map(product => <div className="m-1"><ProductCard product={product} key={ product.id} /></div>)}
            </div>
        </div>
    )
};

export default Products;