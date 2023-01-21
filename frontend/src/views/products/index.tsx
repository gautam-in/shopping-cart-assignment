import { useContext, useEffect, useState } from "react"
// import { Category } from "../../apis/category"
import { getProducts, Product } from "../../apis/product"
import { ProductCard } from "../../components/product-card"
import { GREY_COLOR } from "../../constants/colors"
import { CartContext } from "../../context/cart"
import { Sidebar } from "../../layout/sidebar"
import "./index.scss"

type Props = {}

const Products: React.FC<Props> = () => {
  const { setLoading } = useContext(CartContext)
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  useEffect(() => {
    const callAPI = async () => {
      try {
        setLoading(true)
        const data = await getProducts()
        setProducts(data)
        setFilteredProducts(data)
      } catch (error) {
      } finally {
        setLoading(false)
      }
    }
    callAPI()
  }, [setLoading])

  useEffect(() => {
    if (selectedCategory !== null) {
      setFilteredProducts(
        products.filter((product) => product.category === selectedCategory),
      )
    } else setFilteredProducts(products)
  }, [selectedCategory, products])

  return (
    <div style={{ backgroundColor: GREY_COLOR }}>
      <main className="products-container">
        <Sidebar
          selectCategoryHandler={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
        <ul className="product-list">
          {filteredProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </ul>
      </main>
    </div>
  )
}

export default Products
