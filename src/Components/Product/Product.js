import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Card from "./Card"
import Products from "../../server/products/index.get.json";
import Categories from "../../server/categories/index.get.json";
import { useParams } from "react-router";
import { useMediaQuery } from "../utility/useMediaQuery";
import Dropdown from "./Dropdown";

export default function Product(props) {
    const browserWidth = useMediaQuery("(max-width: 480px)");

    let {id} = useParams();
    let[selectedID, setSelectedID] = useState(id);
    let [filteredProduct, setFilteredProduct] = useState(Products);


     useEffect(() => {
        setSelectedID(id)
        if(!(id ==='' || id === undefined)){
            setFilteredProduct(
                Products.filter((product) => product.category === id)
              );
        }else{
            setFilteredProduct(Products);
        }
     }, [id])

     const filteredCategory = Categories.filter(
        (category) => category.enabled
      ).sort((a, b) => a.order - b.order);
    
    const handleProduct = function (id){
        setSelectedID(id);
        if((id ==='' || id === undefined)){
            setFilteredProduct(Products);
        }else{
            setFilteredProduct(
                Products.filter((product) => product.category === id)
              );
        }
    }

  return (
    <main>
        <section className="product-section">
                {browserWidth ? (
                <Dropdown
                items={[...filteredCategory, { id: "", name: "All Products" }]}
                handleProduct={handleProduct}
                filteredProduct={filteredProduct}
                />
            ) : (
                <Sidebar
                filteredCategory={filteredCategory}
                
                selectedID={selectedID}
                />
            )}
            <section className="product-container-card">
                {filteredProduct.map((product) => (
                <Card
                    key={product.id}
                    id={product.id}
                    imageUrl={product.imageURL}
                    name={product.name}
                    price={product.price}
                    stock={product.stock}
                    text={product.description}
                />
                ))}
            </section>
        </section>
    </main>
    
  );
}
