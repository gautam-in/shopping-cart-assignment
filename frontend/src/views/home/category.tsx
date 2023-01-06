import React, { ReactNode, useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { Category as ICategory } from "../../apis/category"
import { THEME_COLOR } from "../../constants/colors"
import { PRODUCTS_PAGE } from "../../constants/routes"
import CategoryImage from "./category-image"
import "./category.scss"

interface Props {
  category: ICategory
  index: number
}

export const Category: React.FC<Props> = ({ category, index }) => {
  const [Component, setComponent] = useState<ReactNode | null>(null)
  const navigate = useNavigate()
  useEffect(() => {
    setComponent(
      <CategoryImage imageUrl={category.imageUrl} id={category.id} />,
    )
  }, [category])

  return (
    <>
      {index > 0 ? <hr className="horizontal-rule" /> : null}
      <li
        key={category.id}
        className="category-list-item"
        style={{
          flexDirection: index % 2 ? "row-reverse" : "row",
        }}
      >
        {Component}
        <div className="category-details">
          <h2 className="category-name" id={category.id}>
            {category.name}
          </h2>
          <p className="category-description">{category.description}</p>
          <button
            className="category-button"
            style={{
              backgroundColor: THEME_COLOR,
            }}
            onClick={(_) => {
              navigate(PRODUCTS_PAGE)
            }}
          >
            Explore {category.key}
          </button>
        </div>
      </li>
    </>
  )
}
