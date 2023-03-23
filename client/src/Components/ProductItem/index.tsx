import { useContext, useLayoutEffect, useState } from "react"
import { Button } from "../Common"

import { CartContext, CartActionTypes } from "../../context"

import { ProductItemProps } from "./models"

import "./styles.scss"

export const ProductItem = ({ product }: ProductItemProps) => {
  const [viewportWidth, setviewportWidth] = useState(0)
  const { dispatch } = useContext(CartContext)

  useLayoutEffect(() => {
    function updateSize() {
      setviewportWidth(window.innerWidth)
    }

    window.addEventListener("resize", updateSize)

    updateSize()

    return () => window.removeEventListener("resize", updateSize)
  }, [])

  const { name, description, price, imageURL } = product

  const buttonCaption =
    viewportWidth > 1024
      ? "Buy Now"
      : viewportWidth > 768
      ? `Buy Now @ Rs. ${price}`
      : `Buy Now @ MRP Rs. ${price}`

  return (
    <div className="product-item">
      <h4 className="name">{name}</h4>

      <div className="details">
        <img src={imageURL} alt={name} className="image" />

        <p className="description">
          <>
            {description.substring(0, 150)}
            {description.length > 150 && "..."}
          </>
        </p>

        <span className="price">MRP Rs. {price}</span>

        <Button
          type="button"
          variant="primary"
          classes="action-btn"
          handleClick={() =>
            dispatch({ type: CartActionTypes.ADD_ITEM, payload: product })
          }
        >
          {buttonCaption}
        </Button>
      </div>
    </div>
  )
}
