import React, { useContext } from "react"
import { useNavigate } from "react-router"
import { addToCart } from "../apis/add-to-cart"
import { Product } from "../apis/product"
import { PRODUCT_DETAIL_PAGE } from "../constants/routes"
import { CartContext } from "../context/cart"
import "./product-card.scss"

type Props = {
  product: Product
  charLimit?: number
}

const LazySimilarProductImage = React.lazy(
  () => import("../components/similar-product-image"),
)

export const ProductCard: React.FC<Props> = ({ product, charLimit = 25 }) => {
  const navigate = useNavigate()
  const { addCartItem, cartItems, setLoading } = useContext(CartContext)
  let quantity: number = 0
  cartItems.every((item) => {
    if (item.id === product.id) {
      quantity = item.quantity
      return false
    }
    return true
  })

  const addItem = async (product: Product, quantity: number) => {
    try {
      setLoading(true)
      await addToCart()
      addCartItem(product, quantity)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <li
      className="product-card-item"
      onClick={(_) => navigate(`${PRODUCT_DETAIL_PAGE}?id=${product.id}`)}
    >
      <LazySimilarProductImage
        description={product.description}
        imageURL={product.imageURL}
      />
      <div
        style={{
          justifyContent: "space-between",
          width: "100%",
          padding: "5px 30px",
          border: "1px solid #ccc",
          borderTop: "none",
          lineHeight: "27px",
          height: "80px",
        }}
      >
        <p
          style={{
            cursor: "pointer",
          }}
          title={product.name}
        >
          {product.name.slice(0, charLimit)}
          {product.name.length > charLimit ? "..." : ""}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "5px",
            paddingBottom: "20px",
          }}
        >
          <div style={{ textAlign: "center" }}>Rs. {product.price}</div>

          <div
            style={{
              textAlign: "center",
              backgroundColor: "#F58822",
              color: "white",
              cursor: "pointer",
            }}
          >
            {quantity === 0 ? (
              <span
                style={{
                  height: "100%",
                  width: "100%",
                  padding: "0px 10px",
                }}
                onClick={(_) => {
                  _.stopPropagation()
                  addItem(product, 1)
                }}
              >
                Add
              </span>
            ) : (
              <div style={{ display: "flex", padding: "0px 10px" }}>
                <div
                  onClick={(_) => {
                    _.stopPropagation()
                    addItem(product, -1)
                  }}
                >
                  -
                </div>
                <div style={{ padding: "0 5px" }}>{quantity}</div>

                {product.stock > quantity && (
                  <div
                    onClick={(_) => {
                      _.stopPropagation()
                      addItem(product, 1)
                    }}
                  >
                    +
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  )
}
