import { useNavigate } from "react-router-dom"

import { Button } from "../Common"

import { CategoryBannerProps } from "./models"

import "./styles.scss"

export const CategoryBanner = ({
  category: { name, description, imageUrl, key, id },
}: CategoryBannerProps) => {
  const navigate = useNavigate()

  return (
    <div className="category-banner flex text-center">
      <img src={imageUrl} alt={name} />

      <div className="details">
        <h4 className="name">{name}</h4>
        <p className="description">{description}</p>
        <Button
          type="submit"
          variant="primary"
          aria-label="submit login form"
          handleClick={() => navigate(`/products?category=${id}`)}
        >
          Explore {key}
        </Button>
      </div>
    </div>
  )
}
