import React, { useContext } from "react"
import { addToCart } from "../apis/add-to-cart"
import { Product } from "../apis/product"
import { GREY_COLOR, THEME_COLOR } from "../constants/colors"
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
      <h3 className="product-name" title={product.name}>{`${product.name.slice(
        0,
        30,
      )}${product.name.length > 30 ? "..." : ""}`}</h3>
      <LazySimilarProductImage
        description={product.description}
        imageURL={product.imageURL}
      />
      <div className="product-details">
        <div
          className="product-description"
          style={{ backgroundColor: GREY_COLOR }}
        >
          {`${product.description.slice(0, 80)}${
            product.description.length > 80 ? "..." : ""
          }`}
        </div>
        <div className="product-price">
          <div>MRP Rs. {product.price}</div>
          <div
            style={{
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            {quantity === 0 ? (
              <button
                onClick={(_) => {
                  _.stopPropagation()
                  addItem(product, 1)
                }}
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
      </div>
    </li>
  )
}
