import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classes from '../css/products.css';
import axios from 'axios'

import ProductCard from './ProductCard';
import CartContext from '../Context/CartContext';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filterCategory, setFilterCategory] = useState();
    const [filteredProducts, setFilteredProducts] = useState([]);

    let { categoryId } = useParams();

    const { cart, setCart } = React.useContext(CartContext);


    useEffect(() => {
        axios.get("http://localhost:5000/categories")
            .then(res => {
                setCategories(res.data)
            });
        axios.get("http://localhost:5000/products")
            .then(res => {
                setProducts(res.data)
            })
    }, [])

    useEffect(() => {
        setFilterCategory(categoryId);
        filterProducts(categoryId);
    }, [products, categories])

    const filterProducts = (id) => {
        if( !filterCategory || filterCategory !== id ) {
            setFilterCategory(id);
            setFilteredProducts(products.filter(productDetails => 
                productDetails.category === id
            ))
        }
        else {
            setFilterCategory();
            setFilteredProducts([]);
        }
    }

    const addToCart = (productId) => {
        // let data = {productId}
        let cartData = [ ...cart ]
        // axios.post(`http://localhost:5000/addToCart`, data).then(res => {
        //     if(res.response === 'Success') {
                let productToAdd = products.filter(product => product.id === productId)
                let productIndex = cartData.findIndex(product =>  product.id === productId)
                console.log(productIndex)
                if (productIndex !== -1) {
                    cartData[productIndex].quantity++;
                }
                else {
                    productToAdd[0]["quantity"] = 1;
                    cartData.push(productToAdd[0]);
                }
                setCart(cartData);
            // }
        // })
    }

    return (
        <section className={classes['products-container']}>
            <ul className={classes.categories}>
                {
                categories.map(_ => {
                    if (_.enabled)
                        return (
                            <li className={_.id === filterCategory ? `${classes['category-links']} ${classes.active}` : classes['category-links']} onClick={() => filterProducts(_.id)} key={_.id}>
                                <button className={_.id === filterCategory ? `${classes['category-links-name']} ${classes.active}` : classes['category-links-name']} onClick={() => filterProducts(_.id)}>{_.name}</button>
                                <hr />
                            </li>
                        )
                })}
            </ul>
            <article className={classes.products}>
                {filteredProducts.length > 0 ? filteredProducts.map(productDetails => {
                    return (
                        <ProductCard productDetails={productDetails} addToCart={(productId) => addToCart(productId)} key={productDetails.id}></ProductCard>
                    )
                }) : products.map(productDetails => {
                    return (
                        <ProductCard productDetails={productDetails} addToCart={(productId) => addToCart(productId)} key={productDetails.id}></ProductCard>
                    )
                })
                }
            </article>
        </section>
    );

}

export default Home;