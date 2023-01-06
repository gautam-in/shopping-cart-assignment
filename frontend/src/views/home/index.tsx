import { lazy, ReactNode, useContext, useEffect, useState } from "react"
import { Category as ICategory, getCategories } from "../../apis/category"
import { CartContext } from "../../context/cart"
import { Category } from "./category"
import "./index.scss"

const LazyBanners = lazy(() => import("../../layout/banner"))

type Props = {}

const Products: React.FC<Props> = () => {
  const { setLoading } = useContext(CartContext)
  const [categories, setCategories] = useState<ICategory[]>([])
  const [BannerComponent, setBannerComponent] = useState<ReactNode | null>(null)

  useEffect(() => {
    setBannerComponent(<LazyBanners />)
  }, [])

  useEffect(() => {
    const callAPI = async () => {
      try {
        setLoading(true)
        const data = await getCategories()
        setCategories(
          data.sort(
            (category1, category2) => category1.order - category2.order,
          ),
        )
      } catch (error) {
      } finally {
        setLoading(false)
      }
    }
    callAPI()
  }, [setLoading])

  return (
    <>
      {BannerComponent}
      <ul className="categories-container">
        {categories
          .filter(({ enabled }) => enabled)
          .map((category, index) => (
            <Category category={category} key={category.id} index={index} />
          ))}
      </ul>
    </>
  )
}

export default Products
