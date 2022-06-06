import React from 'react'
import Layout from '../components/Layout'
import {useQuery} from 'react-query'
import ProductSidebar from '../components/Products/ProductSidebar'
import ProductList from '../components/Products/ProductList'

async function fetchCategories() {
  const response = await fetch(`http://localhost:5000/categories/`)
  return response.json()
}

const products = () => {
  const {isLoading, isError, data, error} = useQuery(
    'categories',
    fetchCategories,
  )
  if (isLoading) return <div>loading...</div>
  if (isError) return <div>Error Occured</div>
  return (
    <Layout>
      <div className="flex -mt-4">
        <ProductSidebar data={data} />
        <ProductList />
      </div>
    </Layout>
  )
}

export default products
