import React, { useContext } from "react"
import { addToCart } from "../apis/add-to-cart"
import { Product } from "../apis/product"
import { THEME_COLOR } from "../constants/colors"
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
    <li className="product-card-item">
      <h2 style={{ padding: "5px 0px", width: "100%" }}>{product.name}</h2>
      <LazySimilarProductImage
        description={product.description}
        imageURL={product.imageURL}
      />
      <div className="product-details">
        <div style={{ textAlign: "center" }}>MRP Rs. {product.price}</div>
        <div
          style={{
            textAlign: "center",
            cursor: "pointer",
          }}
          onClick={(_) => {
            _.stopPropagation()
            addItem(product, 1)
          }}
        >
          {quantity === 0 ? (
            <button
              style={{
                backgroundColor: THEME_COLOR,
                color: "white",
                width: "100%",
                padding: "10px 10px",
                borderColor: "transparent",
                cursor: "pointer",
              }}
            >
              Add
            </button>
          ) : (
            <div
              style={{
                display: "flex",

                backgroundColor: THEME_COLOR,
                color: "white",
                width: "100%",
                padding: "10px 10px",
                borderColor: "transparent",
              }}
            >
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
    </li>
  )
}
