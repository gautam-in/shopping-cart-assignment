import React from 'react'
import { useProducts } from '../../context/productContext'
import { categoryFilterHandler } from './categoryFilterHandler';

const Filter = () => {
    const { productState, dispatch } = useProducts()
    const { categoryData, serverData, categoryValue } = productState
    const clearFilterHandler = () => {
        dispatch({type:"SET_PRODUCTS_DATA", payload: serverData})
        dispatch({type:"SET_CATEGORY_VALUE", payload: ""})
    }
    const categoryChangeHandler = categoryFilterHandler(categoryValue, clearFilterHandler, serverData, dispatch)
    
  return (
    <main>
        <section className = "flex product-filter-wrapper">
            <select onChange = { categoryChangeHandler } value = { categoryValue } className = "product-filter-select">
                <option value = "default">Select Category</option>
                {
                    categoryData.map((item) => {
                        return <option value = {item.id} key = {item.id}>{item.name}</option>
                    })
                }
                <option value = "Fruits"></option>
            </select>
            <button onClick = { clearFilterHandler } className = "filter-clear-btn">Clear</button>
        </section>
        <section className = "flex product-filter-sidebar">
                {
                    categoryData.map((item) => {
                        return <button value = {item.id} key = {item.id} onClick = { categoryChangeHandler } className = {`filter-btn ${categoryValue === item.id ? "active" : ""}`}>{item.name}</button>
                    })
                }
        </section>
    </main>
  )
}

export default Filter


