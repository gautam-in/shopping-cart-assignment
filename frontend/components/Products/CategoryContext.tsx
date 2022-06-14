// @ts-nocheck
import React from 'react'
import {useQuery} from 'react-query'
import ProductSidebar from 'components/Products/ProductSidebar'
import ProductList from 'components/Products/ProductList'
import axios from 'axiosConfig'

async function fetchCategories() {
  const {data} = await axios.get(`/categories/`)
  return data
}

export const categoryContext = React.createContext(null)

const CategoryWrapper = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('ALL')
  const {isLoading, isError, data, error} = useQuery(
    'categories',
    fetchCategories,
  )
  if (isLoading)
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ml-4 mt-6 mb-4 animate-pulse">
        {[1, 1, 1, 1, 1, 1, 1, 1].map((dummy, index) => (
          <React.Fragment key={index}>
            <div className="h-80 w-80 bg-slate-200"></div>
          </React.Fragment>
        ))}
      </div>
    )
  if (isError) return <div>Error Occured</div>
  return (
    <categoryContext.Provider
      value={{selectedCategory, setSelectedCategory, categoryList: data}}
    >
      <ProductSidebar data={data} />
      <ProductList />
    </categoryContext.Provider>
  )
}

export default CategoryWrapper
