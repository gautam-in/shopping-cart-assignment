import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import classes from '../css/products.css';
import axios from 'axios'

import ProductCard from './ProductCard';
import CartContext from '../Context/CartContext';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState();

    let { categoryId } = useParams();
    const [filterCategory, setFilterCategory] = useState(categoryId);

    const history = useHistory();

    const { cart, setCart } = React.useContext(CartContext);

    useEffect(() => {
        axios.get("http://localhost:5000/categories")
            .then(res => {
                setCategories(res.data)
            })
            .catch(err => {
                setError(err)
            })
    }, [])

    useEffect(() => {
        axios.get("http://localhost:5000/products")
            .then(res => {
                setProducts(res.data)
            })
            .catch(err => {
                setError(err)
            })
    }, [])

    const filterProducts = (id) => {
        if (!filterCategory || filterCategory !== id) {
            history.replace('/products/' + id)
            setFilterCategory(id)
        }
        else {
            setFilterCategory();
            history.replace('/products/')
        }
    }

    const addToCart = (productId) => {
        let cartData = [...cart]

        let productToAdd = products.filter(product => product.id === productId)
        let productIndex = cartData.findIndex(product => product.id === productId)

        if (productIndex !== -1) {
            cartData[productIndex].quantity++;
        }
        else {
            productToAdd[0]["quantity"] = 1;
            cartData.push(productToAdd[0]);
        }
        setCart(cartData);
    }

    if (error) return <p>Error Occured! Please try again</p>;
    else {

        let filteredProducts = filterCategory
            ? products.filter((_) => _.category == filterCategory)
            : products;

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
                    <select value={categoryId} className={`${'buttons'} ${classes['categories-dropdown']}`}
                        onChange={(e) => filterProducts(e.target.value)}>
                        <option value="">---Select Category---</option>
                        {categories.map(_ => {
                            if (_.enabled) {
                                return (
                                    <option value={_.id} key={_.id}>{_.name}</option>
                                )
                            }
                        })}
                    </select>
                    <ul>
                        {filteredProducts.map(productDetails => {
                            return (
                                <li className={classes['product-card']}>
                                    <ProductCard productDetails={productDetails} addToCart={(productId) => addToCart(productId)} key={productDetails.id}></ProductCard>
                                </li>
                            )
                        })
                        }
                    </ul>
                </article>
            </section>
        );

    }
}

export default Home;