import React from 'react'
import styles from './CategoryList.module.scss'

const CategoryList = ({categories}) => {
  return (
    <div className={styles.catListContainer}>
        {
            categories.map((category) => {
                return(
                    <p className={styles.catItem} key={category.id}>{category.name}</p>
                )
            })
        }
    </div>
  )
}

export default CategoryList