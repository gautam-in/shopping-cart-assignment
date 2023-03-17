import React from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useQuery } from "react-query"

import {
  Dropdown,
  CategoryListing,
  Loader,
  ProductList,
} from "../../Components"

import { CategoryType, ProductType } from "../../models"

import "./styles.scss"

export const ProductListingPage = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("")
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  React.useEffect(() => {
    setSelectedCategory(searchParams.get("category") || "")
  }, [searchParams])

  const {
    isLoading: categoriesLoading,
    error: categoriesError,
    data: categories,
  } = useQuery<CategoryType[]>("categories", async () => {
    const response = await fetch("http://localhost:5000/categories")
    const data = await response.json()
    return data
  })

  const {
    isLoading: productsLoading,
    error: productsError,
    data: products,
  } = useQuery<ProductType[]>("products", async () => {
    const response = await fetch("http://localhost:5000/products")
    const data = await response.json()
    return data
  })

  const categoriesToDisplay =
    (categories &&
      categories
        .filter((category) => category.enabled)
        .sort((a, b) => a.order - b.order)) ||
    []

  const filteredProducts =
    products && searchParams.get("category")
      ? [...products].filter(
          (product) => product.category === searchParams.get("category")
        )
      : products || []

  return (
    <section id="products-listing" className="products-listing container flex">
      <div>
        {categoriesLoading && <Loader />}

        <>
          {categoriesError && (
            <h5>Unable to load product categories. Please try again...</h5>
          )}
        </>

        <CategoryListing categories={categoriesToDisplay} />

        <Dropdown
          label="Select a Category"
          showLabel={false}
          options={categoriesToDisplay.map(({ name, id }) => ({
            label: name,
            value: id,
          }))}
          handleClick={(id) => {
            navigate(
              `${
                searchParams.get("category") === id
                  ? "/products"
                  : `/products?category=${id}`
              }`
            )
          }}
        />
      </div>

      <div>
        {productsLoading && <Loader />}

        <>
          {productsError && (
            <h5>Unable to load products. Please try again...</h5>
          )}
        </>

        {products && <ProductList products={filteredProducts} />}
      </div>
    </section>
  )
}
