import React, { useEffect, useState } from "react";
import axios from "axios";
import './index.css';
export const ProductListPage=(props)=>{
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([])
    useEffect(() => {
        ((async () => {
            const productList = await (await axios.get('http://localhost:5000/products')).data;
            const categoryList = await (await axios.get('http://localhost:5000/categories')).data;
            const finalCategoryList = categoryList.filter((category) => category.enabled).sort((categoryA, categoryB) => {
                return categoryA.order - categoryB.order
            });
            setCategories(finalCategoryList)
            setProducts(productList)
        })())
    })
    return (
        <div className="plp-page-container">
        <div className="plp-page-categories-container">
            {categories.map(category=>{
                return (
                    <div key={category.id}>
                        {category.name}
                    </div>
                )
            })

            }
        </div>
        <div className="plp-page-products-container">
            {products.map(product=>{
                return (
                    <div className="plp-page-product-container" key={product.id}>
                        <div>{product.name}</div>
                        <div>
                            <img style={{width:'200px',height:'150px'}} src={product.imageURL}/>
                        </div>
                        <div>{product.description}</div>
                        <div><div>MRP Rs{product.price}</div><button>Buy Now</button></div>
                    </div>
                )
            })
            }
        </div>
        </div>
    )
}