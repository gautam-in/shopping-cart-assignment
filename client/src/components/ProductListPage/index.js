import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import './index.css';
import { Button } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux'
import { selectProductCategory, deselectProductCategory } from '../../redux/productCategorySlice'
import {productAddToCart} from '../../redux/productCartsSlice';
export const ProductListPage = (props) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([])
    const dispatch = useDispatch()
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
    }, [])
    const selectedProductCategory = useSelector(state => state.productCategory)
    const finalProductList = useMemo(() => {
        return selectedProductCategory.id ? products.filter((product) => {
            return product.category === selectedProductCategory.id
        }) : products
    }, [selectedProductCategory.id,products])
    console.log("----", selectedProductCategory);
    const handleCategory = (categoryItem) => () => {
        if (categoryItem.id !== selectedProductCategory.id) {
            dispatch(selectProductCategory({ name: categoryItem.name, id: categoryItem.id }))
        }
        else {
            dispatch(deselectProductCategory())
        }
    }
    return (
        <div className="plp-page-container">
            <div className="plp-page-body">
            <div className="plp-page-categories-container">
                {categories.map(category => {
                    return (
                        <div className={`plp-page-category ${selectedProductCategory.id===category.id?'category-selected':''}`} key={category.id} onClick={handleCategory(category)}>
                            {category.name}
                        </div>
                    )
                })

                }
            </div>
            <div className="plp-page-products-container">
                {finalProductList.map(product => {
                    return (
                        <div className="plp-page-product-container" key={product.id}>
                            <div>{product.name}</div>
                            <div>
                                <img style={{ width: '200px', height: '150px' }} src={product.imageURL} />
                            </div>
                            <div>{product.description}</div>
                            <div><div>MRP Rs{product.price}</div><Button variant="contained" onClick={()=>dispatch(productAddToCart(product))}>Buy Now</Button></div>
                        </div>
                    )
                })
                }
            </div>
            </div>
        </div>
    )
}