import React from 'react'
import useHttp from '../hooks/useHttp'
import CategoryList from './CategoryList'
import ProductList from './ProductList'
import styles from "./Products.module.scss"

const Products = () => {
    const {products, categories} = useHttp()
  return (
    <div className={styles.plpContainer}>
        
        <CategoryList categories={categories} />
        <ProductList products={products} />
    </div>
  )
}

export default Products