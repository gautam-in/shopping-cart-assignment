import { ProductItemProps } from "./models"

export const ProductItem = ({
  product: { name, description, price, imageURL },
}: ProductItemProps) => {
  return <div className="product-item">{name}</div>
}
