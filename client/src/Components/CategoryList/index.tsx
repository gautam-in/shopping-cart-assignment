import { Link, useSearchParams } from "react-router-dom"

import { CategoryListProps } from "./models"

import "./styles.scss"

export const CategoryListing = ({ categories }: CategoryListProps) => {
  const [searchParams] = useSearchParams()

  return (
    <ul className="category-listing">
      {categories.map(({ name, id }) => (
        <li key={id} className="category-item">
          <Link
            to={`${
              searchParams.get("category") === id
                ? "/products"
                : `/products?category=${id}`
            }`}
            className={searchParams.get("category") === id ? "active" : ""}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
