import { useEffect, useState } from "react"
import { Category, getCategories } from "../../apis/category"
import { GREY_COLOR } from "../../constants/colors"

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
      style={{
        flexBasis: "18%",
        border: "1px solid #ccc",
        padding: "0px 0 20px 0px",
        backgroundColor: GREY_COLOR,
        minHeight: window.innerHeight,
      }}
    >
      <ul>
        {categories
          .filter((category) => category.enabled === true)
          .map((category) => (
            <li
              style={{
                backgroundColor:
                  category.id === selectedCategory ? "white" : "transparent",
                listStyle: "none",
                padding: "10px 0 10px 10px",
                borderBottom: "1px solid #ccc",
                cursor: "pointer",
              }}
              onClick={(_) => {
                selectCategoryHandler(
                  category.id === selectedCategory ? null : category.id,
                )
              }}
            >
              {category.name}
            </li>
          ))}
      </ul>
    </aside>
  )
}
