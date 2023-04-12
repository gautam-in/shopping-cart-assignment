import { ProductItem } from "../ProductItem"

import { ProductListProps } from "./models"

import "./styles.scss"

export const ProductList = ({ products }: ProductListProps) => (
  <div className="products grid">
    {products.map((product) => (
      <ProductItem key={product.id} product={product} />
    ))}
  </div>
)
