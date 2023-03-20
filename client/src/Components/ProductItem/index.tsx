import { useContext } from "react"
import { Button } from "../Common"

import { CartContext, CartActionTypes } from "../../context"

import { ProductItemProps } from "./models"

import "./styles.scss"

export const ProductItem = ({ product }: ProductItemProps) => {
  const { dispatch } = useContext(CartContext)

  const { id, name, description, price, imageURL } = product

  return (
    <div className="product-item">
      <h4 className="name">{name}</h4>

      <div className="details">
        <img src={imageURL} alt={name} className="image" />

        <div>
          <p className="description">
            {description.substring(0, 150)}
            {description.length > 150 && "..."}
          </p>
          <Button
            type="button"
            variant="primary"
            classes="action-btn-phone"
            handleClick={() =>
              dispatch({ type: CartActionTypes.ADD_ITEM, payload: product })
            }
          >
            Buy Now @ MRP Rs. {price}
          </Button>
        </div>
      </div>

      <div className="actions flex">
        <span className="price">MRP Rs. {price}</span>

        <Button
          type="button"
          variant="primary"
          classes="action-btn-desktop"
          handleClick={() =>
            dispatch({ type: CartActionTypes.ADD_ITEM, payload: product })
          }
        >
          Buy Now
        </Button>

        <Button
          type="button"
          variant="primary"
          classes="action-btn-tab"
          handleClick={() =>
            dispatch({ type: CartActionTypes.ADD_ITEM, payload: product })
          }
        >
          Buy Now @ Rs. {price}
        </Button>
      </div>
    </div>
  )
}
