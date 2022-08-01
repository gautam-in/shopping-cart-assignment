import React from 'react'
import { useProducts } from '../../context/productContext'
import { categoryFilterHandler, clearFilters } from './../index-components';

const Filter = () => {
    const { productState, dispatch } = useProducts()
    const { categoryData, serverData, categoryValue } = productState
    const clearFilterHandler = clearFilters(dispatch, serverData)
    const categoryChangeHandler = categoryFilterHandler(categoryValue, clearFilterHandler, serverData, dispatch)
  return (
    <main data-testid = "filter">
        <section className = "product-filter-wrapper">
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
        <section className = "product-filter-sidebar">
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



