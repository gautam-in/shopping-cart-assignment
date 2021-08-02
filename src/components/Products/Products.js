import React, { useState, useEffect, useContext } from 'react'
import 'regenerator-runtime/runtime'
import { Category } from '../Category'
import { ProductList } from '../ProductList'
import axiosClient from '../../config/axios-client'
import api from '../../constants/api/services'
import { isEmpty } from 'lodash'

const Products = () => {
    const [categories, setCategory] = useState({});
    const [selectedCategory, setselectedCategory] = useState('');
    const [productsList, setProductsList] = useState('');
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        axiosClient.get(api.getCategories)
        .then(response => {
            setCategory(response.data)
            setLoading(false)
        })
        .catch(error => {
            console.log(error)
            setLoading(false)
        })
    }, [])

    useEffect(() => {
        axiosClient.get(api.getProducts)
        .then(response => {
            setProductsList(response.data)
            setLoading(false)
        })
        .catch(error => {
            console.log(error)
            setLoading(false)
        })
    }, [])

    const filterProduct = 
        selectedCategory && productsList 
            ? productsList.filter((product) => product.category === selectedCategory)
            : productsList
        
    const handleCategory = (id) => {
        setselectedCategory(id)
    }
    return (
      <div className="products">
        {isLoading ? (
            <div>Loading.....</div>
            ) :    
                <>
                {!isEmpty(categories) && <Category categories={categories} handleCategoryChange={handleCategory} selectedCategory={selectedCategory} />}
                <div className="product-list">
                    {!isEmpty(productsList) && <ProductList productsList={filterProduct} />}
                </div>
                </>
        }   
      </div>
    )
}

export default Products