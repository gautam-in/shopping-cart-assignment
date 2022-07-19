import React, {useEffect, useState} from 'react';
import CategoryNavbar from "../../../components/Category/category-navbar"
import {useRouter} from "next/router";
import dynamic from 'next/dynamic'
const ProductGrid = dynamic(() => import('../../../components/Category/ProductGrid'), {  loading : ()=> <p>Loading...</p>})

import styles from '../../../styles/products.module.scss'
import CartWindow from "../../../components/Category/CartWindow";
import Head from "next/head";
const Index = () => {
    const router = useRouter();
    const {categoryId} = router.query;
    const [categories, setCategories] = useState(null);
    const [products, setProducts] = useState(null)
    function checkIfAuthenticated(){
        if(!localStorage.getItem("token")){
            router.push('/auth/login');
        }
    }

    useEffect( () => {
        checkIfAuthenticated();
        if(!router.isReady) return;
        fetch('http://localhost:5000/api/v1/categories', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            }
        }).then(res => res.json()).then((data) => {
            console.log(data.data);
            setCategories(data.data);
        })
        fetch('http://localhost:5000/api/v1/products?' + new URLSearchParams({
            categoryId: categoryId,
        }), {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            }
        }).then(res => res.json()).then((data) => {
            setProducts(data.data);
        })


    }, [router.isReady, categoryId])
    return (
        <div className={styles.flexContainer}>
            <Head>
                <meta name="keywords" content="products,products by category, page, list"/>
                <meta name="description" content="Products by Categories"/>
                <title>Products</title>
            </Head>
            <CategoryNavbar categories={categories}/>
            <ProductGrid products={products}/>
            <CartWindow/>

        </div>
    );
};

export default Index;