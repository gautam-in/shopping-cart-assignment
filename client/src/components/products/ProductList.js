import React from 'react'
import styles from './ProductList.module.scss'

const ProductList = ({products}) => {
  return (
    <div className={styles.listContainer}>
        {
            products.map((product) => {
                return(
                    <p key={product.id}>{product.name}</p>
                )
            })
        }
    </div>
  )
}

export default ProductList