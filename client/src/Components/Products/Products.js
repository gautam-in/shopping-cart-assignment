import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { homeAction } from "../../_actions";
import { productAction } from "../../_actions/products.actions";
import Accordion from "../Accordion/Accordion";
import Sidebar from "../Sidebar/Sidebar";
import ProductItem from "./ProductItem";
import "./Products.scss"

const Products = () => {
    // const [products, setProducts] = useState([]);
    const categoriesList = useSelector(state => state.home.categories);
    const productList = useSelector(state => state.products.productsList);
    const dispatch = useDispatch();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isMobile, setIsMobile] = useState(false);
    const params = useParams();

    useEffect(() => {
        dispatch(homeAction.getCategories());
        dispatch(productAction.getProducts());
        throttledHandleWindowResize();
    }, []);

    useEffect(() => {
        filterProduct(params["id"]);
    }, [productList, params["id"]]);

    useEffect(() => {
        window.addEventListener('resize', throttledHandleWindowResize)
        return () => { window.removeEventListener('resize', throttledHandleWindowResize) }
    }, [window.innerWidth])

    const throttledHandleWindowResize = () => {
        setIsMobile(window.innerWidth < 640)
    }

    const toggleCategories = (categoryId = "") => {
        let result = categoriesList.map(item => {
            if (categoryId === item.id) {
                item.enabled = !item.enabled
            } else {
                item.enabled = false;
            }
            return item;
        })
        return result;
    }

    const filterProduct = (categoryId = "") => {
        let filteredProducts = [];
        if (categoryId != "") {
            let result = toggleCategories(categoryId);
            let categoryObj = result.find(item => item.id === categoryId);
            categoryObj.enabled ?
                (filteredProducts = productList.filter(item => item.category === categoryId)) :
                (filteredProducts = [...productList]);
        } else {
            toggleCategories(categoryId);
            filteredProducts = [...productList];
        }
        setFilteredProducts(filteredProducts);
    }

    return (
        <>
            {
                isMobile ? <> <Accordion categories={categoriesList} products={productList} /> </> :
                    <div className="products" aria-label="Product page">
                        <Sidebar categories={categoriesList} />
                        <div className="product-container" aria-label="products section with each product">
                            {
                                filteredProducts.length ? filteredProducts.map(product => {
                                    return <ProductItem key={product.id} product={product} />
                                }) : ""
                            }
                        </div>
                    </div>

            }
        </>
    )
}

export default Products;