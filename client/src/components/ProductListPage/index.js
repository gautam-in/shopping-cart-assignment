import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import './index.css';
import { Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector, useDispatch } from 'react-redux'
import { selectProductCategory, deselectProductCategory } from '../../redux/productCategorySlice'
import { productAddToCart } from '../../redux/productCartsSlice';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250
        }
    }
};

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
    }, [selectedProductCategory.id, products])
    const handleCategory = (categoryItem) => () => {
        if (categoryItem.id !== selectedProductCategory.id) {
            dispatch(selectProductCategory({ name: categoryItem.name, id: categoryItem.id }))
        }
        else {
            dispatch(deselectProductCategory())
        }
    }
    const handleMobileCategory = (event) => {
        const category = event.target.value;
        if (category.id !== selectedProductCategory.id) {
            dispatch(selectProductCategory({ name: category.name, id: category.id }))
        }
        else {
            dispatch(deselectProductCategory())
        }
    }
    return (
        <div className="plp-page-container">
            <div className="plp-page-body">
                <div className="mobile-category-container">
                    <FormControl variant={"standard"} sx={{ m: 0, width: '100%', backgroundColor: '#cc1269' }}>
                        <Select
                            value={selectedProductCategory}
                            onChange={handleMobileCategory}
                            renderValue={(selected) => {
                                if (!selectedProductCategory.name) {
                                    return <span style={{ color: '#fff', paddingLeft: '10px' }}>Select Category</span>
                                }
                                return <span style={{ color: '#fff', paddingLeft: '10px' }}>{selected.name}</span>
                            }}
                            MenuProps={MenuProps}
                            inputProps={{ "aria-label": "Without label" }}
                        >
                            {categories.map((category) => (
                                <MenuItem sx={{ backgroundColor: category.name === selectedProductCategory.name ? '#095BF6' : "" }} key={category.name} value={category}>
                                    {category.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div className="plp-page-categories-container">
                    {categories.map(category => {
                        return (
                            <div tabIndex={0} className={`plp-page-category ${selectedProductCategory.id === category.id ? 'category-selected' : ''}`} key={category.id} onClick={handleCategory(category)}>
                                {category.name}
                            </div>
                        )
                    })
                    }
                </div>
                <div className="products-container">
                    <div className="plp-page-products-container">
                        {finalProductList.map(product => {
                            return (
                                <div className="plp-page-product" key={product.id}>
                                    <div className="header-product">{product.name}</div>
                                    <div>
                                        <img style={{ width: '150px', height: '140px' }} src={product.imageURL} alt={product.name}/>
                                    </div>
                                    <p className="des">
                                        {product.description}
                                    </p>
                                    <div className="btn-content-box">
                                        <div className="mrp-price-content">MRP Rs{product.price}</div>
                                        <div className="button-container">
                                            <Button className="buy-now-button" variant="contained" onClick={() => dispatch(productAddToCart(product))}>Buy Now</Button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}