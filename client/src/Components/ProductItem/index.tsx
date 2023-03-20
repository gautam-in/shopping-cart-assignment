import { Button } from "../Common"

import { ProductItemProps } from "./models"

import "./styles.scss"

export const ProductItem = ({
  product: { id, name, description, price, imageURL },
}: ProductItemProps) => {
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
            handleClick={() => console.log(id)}
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
          handleClick={() => console.log(id)}
        >
          Buy Now
        </Button>

        <Button
          type="button"
          variant="primary"
          classes="action-btn-tab"
          handleClick={() => console.log(id)}
        >
          Buy Now @ Rs. {price}
        </Button>
      </div>
    </div>
  )
}
