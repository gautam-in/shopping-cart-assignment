import { useEffect, useState } from "react"
import { Category, getCategories } from "../../apis/category"
import { GREY_COLOR } from "../../constants/colors"
import "./index.scss"

interface Props {
  selectCategoryHandler: (categoryId: string | null) => void
  selectedCategory: string | null
}

export const Sidebar: React.FC<Props> = ({
  selectCategoryHandler,
  selectedCategory,
}) => {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    getCategories()
      .then((_) => {
        setCategories(
          _.sort((category1, category2) => category1.order - category2.order),
        )
      })
      .catch(console.log)
  }, [])

  return (
    <aside
      className="sidebar"
      style={{
        backgroundColor: GREY_COLOR,
        minHeight: window.innerHeight,
      }}
    >
      <ul>
        {categories
          .filter((category) => category.enabled === true)
          .map((category) => (
            <li
              className="sidebar-list-item"
              style={{
                backgroundColor:
                  category.id === selectedCategory ? "white" : "transparent",
              }}
              onClick={(_) => _.stopPropagation()}
            >
              <button
                tabIndex={0}
                onClick={(_) => {
                  selectCategoryHandler(
                    category.id === selectedCategory ? null : category.id,
                  )
                }}
              >
                {category.name}
              </button>
            </li>
          ))}
      </ul>
    </aside>
  )
}
