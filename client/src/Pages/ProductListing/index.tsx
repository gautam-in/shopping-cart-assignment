import React from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

import {
  Dropdown,
  CategoryListing,
  ProductList,
  DataLoader,
} from "../../Components"

import { CategoryType, ProductType } from "../../models"

import "./styles.scss"

export const ProductListingPage = () => {
  const [, setSelectedCategory] = React.useState("")
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  React.useEffect(() => {
    setSelectedCategory(searchParams.get("category") || "")
  }, [searchParams])

  return (
    <section id="products-listing" className="products-listing container flex">
      <div>
        <DataLoader resource="categories">
          {(categories: CategoryType[]) => {
            const categoriesToDisplay =
              categories
                .filter((category) => category.enabled)
                .sort((a, b) => a.order - b.order) || []

            return (
              <>
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
              </>
            )
          }}
        </DataLoader>
      </div>

      <div>
        <DataLoader resource="products">
          {(products: ProductType[]) => {
            const filteredProducts = searchParams.get("category")
              ? [...products].filter(
                  (product) => product.category === searchParams.get("category")
                )
              : products || []
            return <ProductList products={filteredProducts} />
          }}
        </DataLoader>
      </div>
    </section>
  )
}
